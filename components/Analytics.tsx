"use client";

import Script from "next/script";
import { useEffect } from "react";

const GA_MEASUREMENT_ID = "G-CDFYXPTLDK";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params ?? {});
}

export function Analytics() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as Element | null;
      if (!target || typeof target.closest !== "function") return;
      const link = target.closest("a");
      const href = link?.getAttribute("href") ?? "";
      if (!href) return;
      if (href.startsWith("tel:")) {
        trackEvent("contact_phone_click", { link_url: href });
        return;
      }
      if (href.includes("wa.me") || href.includes("whatsapp")) {
        trackEvent("contact_whatsapp_click", { link_url: href });
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
      <Script id="google-analytics-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`}
      </Script>
    </>
  );
}
