"use client";

import { useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type { FormContent } from "@/types/content";

type Locale = "ru" | "en" | "ge";
export type ReconstructionFormCopy = {
  ariaLabel: string;
  heading: string;
  messageLabel: string;
  contactLabel: string;
  photosLabel: string;
  selectedFiles: string;
  noFiles: string;
  removeFile: string;
  attach: string;
  sending: string;
  send: string;
  responseNote: string;
  required: string;
  fileLimit: string;
  error: string;
  success: string;
};

type InquiryFormProps = {
  content: FormContent;
  locale?: Locale;
  variant?: "default" | "reconstruction";
  reconstructionCopy?: ReconstructionFormCopy;
};
type FormState = "idle" | "sending" | "sent" | "error";

const maxFiles = 10;

const ui = {
  ru: { messageLabel: "Сообщение", messagePlaceholder: "Напишите о доме или задаче", contactLabel: "Укажите, как с вами связаться", contactPlaceholder: "Email, телефон или WhatsApp", files: "Прикреплённые файлы", remove: "Удалить", attach: "Прикрепить", sending: "Отправляем…", send: "Отправить →", required: "Напишите сообщение и укажите, как с вами связаться.", fileLimit: `Можно прикрепить до ${maxFiles} файлов.`, error: "Не удалось отправить сообщение. Попробуйте ещё раз или напишите нам в WhatsApp." },
  en: { messageLabel: "Message", messagePlaceholder: "Tell us about the property or task", contactLabel: "How should we contact you?", contactPlaceholder: "Email, phone or WhatsApp", files: "Attached files", remove: "Remove", attach: "Attach", sending: "Sending…", send: "Send →", required: "Please write a message and tell us how to contact you.", fileLimit: `You can attach up to ${maxFiles} files.`, error: "We could not send your message. Please try again or contact us on WhatsApp." },
  ge: { messageLabel: "შეტყობინება", messagePlaceholder: "მოგვწერეთ სახლის ან ამოცანის შესახებ", contactLabel: "როგორ დაგიკავშირდეთ?", contactPlaceholder: "ელფოსტა, ტელეფონი ან WhatsApp", files: "დართული ფაილები", remove: "წაშლა", attach: "დართვა", sending: "იგზავნება…", send: "გაგზავნა →", required: "დაწერეთ შეტყობინება და მიუთითეთ, როგორ დაგიკავშირდეთ.", fileLimit: `შეგიძლიათ დაურთოთ მაქსიმუმ ${maxFiles} ფაილი.`, error: "შეტყობინების გაგზავნა ვერ მოხერხდა. სცადეთ თავიდან ან მოგვწერეთ WhatsApp-ზე." }
} as const;

export function InquiryForm({ content, locale = "ru", variant = "default", reconstructionCopy }: InquiryFormProps) {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const defaultMessage = variant === "reconstruction" ? "" : content.message ?? content.text;
  const copy = ui[locale];
  const reconstruction = variant === "reconstruction" ? reconstructionCopy : undefined;

  function updateFiles(event: ChangeEvent<HTMLInputElement>) {
    const next = Array.from(event.target.files ?? []);
    setFiles(next.slice(0, maxFiles));
    if (next.length > maxFiles) setError(reconstruction?.fileLimit ?? copy.fileLimit);
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
      setError(reconstruction?.required ?? copy.required);
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
      setError(reconstruction?.error ?? copy.error);
      setState("error");
    }
  }

  if (reconstruction) {
    const selectedFiles = reconstruction.selectedFiles.replace("{count}", String(files.length));
    return (
      <form className="inquiry-form reconstruction-inquiry-form" id="contact-form-form" aria-label={reconstruction.ariaLabel} onSubmit={handleSubmit}>
        <input className="inquiry-honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <input type="hidden" name="pageTitle" value={content.title} />
        <input type="hidden" name="pageUrl" value={typeof window === "undefined" ? "" : window.location.href} />
        <h3 className="form-title">{reconstruction.heading}</h3>
        <label className="reconstruction-form-field" htmlFor="reconstruction-project">
          <span>{reconstruction.messageLabel}</span>
          <textarea id="reconstruction-project" name="message" defaultValue="" required />
        </label>
        <label className="reconstruction-form-field" htmlFor="reconstruction-contact">
          <span>{reconstruction.contactLabel}</span>
          <input id="reconstruction-contact" name="contact" autoComplete="tel" required />
        </label>
        <div className="reconstruction-form-field reconstruction-photo-field">
          <span id="reconstruction-photos-label">{reconstruction.photosLabel}</span>
          <label className="inquiry-attach" htmlFor="reconstruction-photos">
            <span aria-hidden="true">📎</span><span>{reconstruction.attach}</span>
          </label>
          <input
            ref={inputRef}
            id="reconstruction-photos"
            name="attachments"
            type="file"
            multiple
            accept="image/*"
            aria-labelledby="reconstruction-photos-label"
            aria-describedby="reconstruction-file-selection"
            onChange={updateFiles}
          />
          <small id="reconstruction-file-selection" className="file-selection" role="status" aria-live="polite">
            {files.length > 0 ? selectedFiles : reconstruction.noFiles}
          </small>
        </div>
        {files.length > 0 ? (
          <ul className="inquiry-files" aria-label={reconstruction.photosLabel}>
            {files.map((file, index) => (
              <li key={`${file.name}-${file.lastModified}`}>
                <span>{file.name}</span>
                <button type="button" onClick={() => removeFile(index)} aria-label={reconstruction.removeFile.replace("{filename}", file.name)}>×</button>
              </li>
            ))}
          </ul>
        ) : null}
        <div className="form-actions">
          <button className="inquiry-send" type="submit" disabled={state === "sending"}>{state === "sending" ? reconstruction.sending : reconstruction.send}</button>
          <p className="response-time">{reconstruction.responseNote}</p>
          {state === "sent" ? <p className="form-status" role="status" aria-live="polite">{reconstruction.success}</p> : null}
          {state === "error" && error ? <p className="form-status error" role="alert">{error}</p> : null}
        </div>
      </form>
    );
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
