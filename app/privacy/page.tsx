import type { Metadata } from "next";
import { PrivacyPage, privacyMetadata } from "@/components/PrivacyPage";

export const metadata: Metadata = privacyMetadata("ru");

export default function Page() {
  return <PrivacyPage locale="ru" />;
}
