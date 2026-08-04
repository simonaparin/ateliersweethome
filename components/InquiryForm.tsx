"use client";

import { useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type { FormContent } from "@/types/content";

type InquiryFormProps = { content: FormContent };
type FormState = "idle" | "sending" | "sent" | "error";

const maxFiles = 10;

export function InquiryForm({ content }: InquiryFormProps) {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const defaultMessage = content.message ?? content.text;

  function updateFiles(event: ChangeEvent<HTMLInputElement>) {
    const next = Array.from(event.target.files ?? []);
    setFiles(next.slice(0, maxFiles));
    if (next.length > maxFiles) setError(`Можно прикрепить до ${maxFiles} файлов.`);
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
      setError("Напишите сообщение и укажите, как с вами связаться.");
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
      setError("Не удалось отправить сообщение. Попробуйте ещё раз или напишите нам в WhatsApp.");
      setState("error");
    }
  }

  return (
    <form className="inquiry-form inquiry-form--message" id="contact-form" onSubmit={handleSubmit}>
      <input className="inquiry-honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <input type="hidden" name="pageTitle" value={content.title} />
      <input type="hidden" name="pageUrl" value={typeof window === "undefined" ? "" : window.location.href} />
      <textarea name="message" aria-label="Сообщение" defaultValue={defaultMessage} placeholder="Напишите о доме или задаче" required />
      <label className="inquiry-contact">
        <span>Укажите, как с вами связаться</span>
        <input name="contact" autoComplete="tel" placeholder="Email, телефон или WhatsApp" required />
      </label>
      {files.length > 0 ? <ul className="inquiry-files" aria-label="Прикреплённые файлы">{files.map((file, index) => <li key={`${file.name}-${file.lastModified}`}><span>{file.name}</span><button type="button" onClick={() => removeFile(index)} aria-label={`Удалить ${file.name}`}>×</button></li>)}</ul> : null}
      <div className="inquiry-toolbar">
        <label className="inquiry-attach">
          <span aria-hidden="true">📎</span><span>Прикрепить</span>
          <input ref={inputRef} name="attachments" type="file" multiple accept="image/*,video/*,application/pdf,.dwg,.dxf,.doc,.docx,.xls,.xlsx" onChange={updateFiles} />
        </label>
        <button className="inquiry-send" type="submit" disabled={state === "sending"}>{state === "sending" ? "Отправляем…" : "Отправить →"}</button>
      </div>
      {state === "sent" ? <p className="form-status" role="status">Сообщение отправлено. Мы свяжемся с вами.</p> : null}
      {state === "error" && error ? <p className="form-status error" role="alert">{error}</p> : null}
    </form>
  );
}
