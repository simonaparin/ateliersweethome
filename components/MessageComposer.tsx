"use client";

import { useId, useState } from "react";
import type { FormEvent } from "react";

export type MessageComposerCopy = {
  message: string;
  messageLabel: string;
  contactLabel: string;
  contactPlaceholder: string;
  attach: string;
  send: string;
  sending: string;
  sent: string;
  error: string;
  required: string;
  remove: string;
};

type Props = {
  copy: MessageComposerCopy;
  pageTitle: string;
};

export function MessageComposer({ copy, pageTitle }: Props) {
  const inputId = useId();
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  function removeFile(index: number) {
    setFiles((current) => current.filter((_, itemIndex) => itemIndex !== index));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const message = String(data.get("message") ?? "").trim();
    const contact = String(data.get("contact") ?? "").trim();
    if (!message || !contact) {
      setError(copy.required);
      setStatus("error");
      return;
    }
    data.set("pageTitle", pageTitle);
    data.set("pageUrl", window.location.href);
    data.delete("attachments");
    files.forEach((file) => data.append("attachments", file, file.name));
    setStatus("sending");
    setError("");
    try {
      const response = await fetch("/api/inquiries", { method: "POST", body: data });
      if (!response.ok) throw new Error("send failed");
      setStatus("sent");
    } catch {
      setError(copy.error);
      setStatus("error");
    }
  }

  return (
    <form className="message-composer" onSubmit={onSubmit}>
      <input className="message-composer__honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <textarea name="message" defaultValue={copy.message} aria-label={copy.messageLabel} rows={5} required />
      <label className="message-composer__contact">
        <span>{copy.contactLabel}</span>
        <input name="contact" placeholder={copy.contactPlaceholder} required autoComplete="tel" />
      </label>
      {files.length > 0 ? <ul className="message-composer__files">{files.map((file, index) => <li key={`${file.name}-${index}`}><span>{file.name}</span><button type="button" onClick={() => removeFile(index)} aria-label={`${copy.remove} ${file.name}`}>×</button></li>)}</ul> : null}
      {status === "sent" ? <p className="message-composer__status" role="status">{copy.sent}</p> : null}
      {status === "error" ? <p className="message-composer__status message-composer__status--error" role="alert">{error}</p> : null}
      <div className="message-composer__bar">
        <label className="message-composer__attach" htmlFor={inputId}>⌇ {copy.attach}</label>
        <input id={inputId} type="file" multiple className="message-composer__file-input" onChange={(event) => setFiles(Array.from(event.target.files ?? []))} accept="image/*,video/*,.pdf,.dwg,.dxf,.doc,.docx,.xls,.xlsx" />
        <button type="submit" disabled={status === "sending"}>{status === "sending" ? copy.sending : copy.send}</button>
      </div>
    </form>
  );
}
