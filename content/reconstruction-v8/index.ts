import { reconstructionEn } from "./en";
import { reconstructionKa } from "./ka";
import { reconstructionRu } from "./ru";
import type { ReconstructionLocale, ReconstructionPageCopy } from "./types";

export const reconstructionV8: Record<ReconstructionLocale, ReconstructionPageCopy> = {
  ru: reconstructionRu,
  en: reconstructionEn,
  ge: reconstructionKa
};

export type { ReconstructionLocale, ReconstructionPageCopy } from "./types";
