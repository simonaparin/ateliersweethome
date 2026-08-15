"use client";

import { useEffect, useRef, useState } from "react";

type Locale = "ru" | "en" | "ge";

const LABELS: Record<Locale, string> = { ru: "RU", en: "EN", ge: "KA" };

type LanguageSwitcherProps = {
  locale: Locale;
  hrefFor: Record<Locale, string>;
  label: string;
};

export function LanguageSwitcher({ locale, hrefFor, label }: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: MouseEvent) => {
      if (box.current && !box.current.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="language-switcher" ref={box}>
      <button
        className="language-switcher__button"
        type="button"
        aria-label={label}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen(value => !value)}
      >
        {LABELS[locale]}
        <svg viewBox="0 0 10 6" aria-hidden="true" focusable="false"><path d="M0 0l5 6 5-6z" fill="currentColor" /></svg>
      </button>
      <div className="language-switcher__menu" hidden={!open}>
        {(Object.keys(LABELS) as Locale[]).map(target => (
          <a key={target} href={hrefFor[target]} aria-current={target === locale ? "page" : undefined} hrefLang={target === "ge" ? "ka" : target}>
            {LABELS[target]}
          </a>
        ))}
      </div>
    </div>
  );
}
