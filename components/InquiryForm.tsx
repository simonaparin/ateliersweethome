"use client";

import { useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type { FormContent } from "@/types/content";

type Locale = "ru" | "en" | "ge";
type InquiryFormProps = { content: FormContent; locale?: Locale };
type FormState = "idle" | "sending" | "sent" | "error";

const maxFiles = 10;

const ui = {
  ru: { messageLabel: "Сообщение", messagePlaceholder: "Напишите о доме или задаче", contactLabel: "Укажите, как с вами связаться", contactPlaceholder: "Email, телефон или WhatsApp", files: "Прикреплённые файлы", remove: "Удалить", attach: "Прикрепить", sending: "Отправляем…", send: "Отправить →", required: "Напишите сообщение и укажите, как с вами связаться.", fileLimit: `Можно прикрепить до ${maxFiles} файлов.`, error: "Не удалось отправить сообщение. Попробуйте ещё раз или напишите нам в WhatsApp." },
  en: { messageLabel: "Message", messagePlaceholder: "Tell us about the property or task", contactLabel: "How should we contact you?", contactPlaceholder: "Email, phone or WhatsApp", files: "Attached files", remove: "Remove", attach: "Attach", sending: "Sending…", send: "Send →", required: "Please write a message and tell us how to contact you.", fileLimit: `You can attach up to ${maxFiles} files.`, error: "We could not send your message. Please try again or contact us on WhatsApp." },
  ge: { messageLabel: "შეტყობინება", messagePlaceholder: "მოგვწერეთ სახლის ან ამოცანის შესახებ", contactLabel: "როგორ დაგიკავშირდეთ?", contactPlaceholder: "ელფოსტა, ტელეფონი ან WhatsApp", files: "დართული ფაილები", remove: "წაშლა", attach: "დართვა", sending: "იგზავნება…", send: "გაგზავნა →", required: "დაწერეთ შეტყობინება და მიუთითეთ, როგორ დაგიკავშირდეთ.", fileLimit: `შეგიძლიათ დაურთოთ მაქსიმუმ ${maxFiles} ფაილი.`, error: "შეტყობინების გაგზავნა ვერ მოხერხდა. სცადეთ თავიდან ან მოგვწერეთ WhatsApp-ზე." }
} as const;

export function InquiryForm({ content, locale = "ru" }: InquiryFormProps) {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const defaultMessage = content.message ?? content.text;
  const copy = ui[locale];

  function updateFiles(event: ChangeEvent<HTMLInputElement>) {
    const next = Array.from(event.target.files ?? []);
    setFiles(next.slice(0, maxFiles));
    if (next.length > maxFiles) setError(copy.fileLimit);
  }

  function removeFile(index: number) {
    const next = files.filter((_, fileIndex) => fileIndex !== index);
    setFiles(next);
    if (inputRef.current) {
      const transfer = new DataTransfer();
      next.forEach((file) => transfer.items.add(file));
      inputRef.current.files = transfer.files;
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "sending") return;
    setError("");
    const form = event.currentTarget;
    const formData = new FormData(form);
    if (!String(formData.get("message") ?? "").trim() || !String(formData.get("contact") ?? "").trim()) {
      setError(copy.required);
      setState("error");
      return;
    }
    setState("sending");
    try {
      const response = await fetch("/api/inquiries", { method: "POST", body: formData });
      if (!response.ok) throw new Error("Request failed");
      setState("sent");
      form.reset();
      setFiles([]);
    } catch {
      setError(copy.error);
      setState("error");
    }
  }

  return (
    <form className="inquiry-form inquiry-form--message" id="contact-form" onSubmit={handleSubmit}>
      <input className="inquiry-honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <input type="hidden" name="pageTitle" value={content.title} />
      <input type="hidden" name="pageUrl" value={typeof window === "undefined" ? "" : window.location.href} />
      <textarea name="message" aria-label={copy.messageLabel} defaultValue={defaultMessage} placeholder={copy.messagePlaceholder} required />
      <label className="inquiry-contact">
        <span>{copy.contactLabel}</span>
        <input name="contact" autoComplete="tel" placeholder={copy.contactPlaceholder} required />
      </label>
      {files.length > 0 ? <ul className="inquiry-files" aria-label={copy.files}>{files.map((file, index) => <li key={`${file.name}-${file.lastModified}`}><span>{file.name}</span><button type="button" onClick={() => removeFile(index)} aria-label={`${copy.remove} ${file.name}`}>×</button></li>)}</ul> : null}
      <div className="inquiry-toolbar">
        <label className="inquiry-attach">
          <span aria-hidden="true">📎</span><span>{copy.attach}</span>
          <input ref={inputRef} name="attachments" type="file" multiple accept="image/*,video/*,application/pdf,.dwg,.dxf,.doc,.docx,.xls,.xlsx" onChange={updateFiles} />
        </label>
        <button className="inquiry-send" type="submit" disabled={state === "sending"}>{state === "sending" ? copy.sending : copy.send}</button>
      </div>
      {state === "sent" ? <p className="form-status" role="status">{content.success}</p> : null}
      {state === "error" && error ? <p className="form-status error" role="alert">{error}</p> : null}
    </form>
  );
}
