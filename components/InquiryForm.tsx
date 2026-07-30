"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import type { FormContent } from "@/types/content";

type InquiryFormProps = {
  content: FormContent;
};

type FormState = "idle" | "sending" | "sent" | "not-configured" | "error";

export function InquiryForm({ content }: InquiryFormProps) {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const required = ["name", "contact", "location", "task"];
    const missing = required.some((key) => !String(formData.get(key) ?? "").trim());
    const files = formData.getAll("photos").filter((value) => value instanceof File && value.size > 0);

    if (missing) {
      setError("Заполните имя, контакт, местоположение и задачу.");
      setState("error");
      return;
    }

    if (files.length > 10) {
      setError("Можно приложить не больше 10 файлов.");
      setState("error");
      return;
    }

    setState("sending");

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        body: formData
      });

      if (response.status === 501) {
        setState("not-configured");
        return;
      }

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setState("sent");
    } catch {
      setError("Отправка пока не настроена. Данные не были отправлены.");
      setState("error");
    }
  }

  return (
    <form className="inquiry-form" id="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          <span>{content.fields.name}</span>
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          <span>{content.fields.contact}</span>
          <input name="contact" autoComplete="tel" required />
        </label>
        <label>
          <span>{content.fields.location}</span>
          <input name="location" required />
        </label>
        <label>
          <span>{content.fields.start}</span>
          <input name="start" />
        </label>
      </div>

      <label>
        <span>{content.fields.task}</span>
        <textarea name="task" rows={5} required />
      </label>

      <label>
        <span>{content.fields.budget}</span>
        <input name="budget" />
        <small>{content.budgetHint}</small>
      </label>

      <label>
        <span>{content.fields.photos}</span>
        <input name="photos" type="file" accept="image/*" multiple />
      </label>

      {content.localMode ? <p className="form-note">{content.localMode}</p> : null}

      {state === "not-configured" ? (
        <p className="form-status" role="status">{content.notSent}</p>
      ) : null}
      {state === "sent" ? (
        <p className="form-status" role="status">{content.success}</p>
      ) : null}
      {state === "error" && error ? (
        <p className="form-status error" role="alert">{error}</p>
      ) : null}

      <button className="primary-button" type="submit" disabled={state === "sending"}>
        {state === "sending" ? "Проверяем..." : content.submit}
      </button>
    </form>
  );
}
