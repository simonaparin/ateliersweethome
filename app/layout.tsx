import type { Metadata } from "next";
import type { ReactNode } from "react";
import { headers } from "next/headers";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { FloatingContact } from "@/components/FloatingContact";
import { siteConfig } from "@/data/site";

const displayFont = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-display"
});

const bodyFont = Source_Sans_3({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: "Atelier Sweet Home",
  description: "Реконструкция старых домов в Грузии"
};

export default async function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const requestHeaders = await headers();
  const language = requestHeaders.get("x-sweet-home-lang") === "en"
    ? "en"
    : requestHeaders.get("x-sweet-home-lang") === "ka"
      ? "ka"
      : "ru";

  return (
    <html lang={language} className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}
