import type { Metadata } from "next";
import { TermsPage, termsMetadata } from "@/components/PrivacyPage";

export const metadata: Metadata = termsMetadata("ru");

export default function Page() {
  return <TermsPage locale="ru" />;
}
