import { homeInspectionEn } from "./en";
import { homeInspectionKa } from "./ka";
import { homeInspectionRu } from "./ru";
import type { HomeInspectionCopy, HomeInspectionLocale } from "./types";

export const homeInspectionV9: Record<HomeInspectionLocale, HomeInspectionCopy> = { ru: homeInspectionRu, en: homeInspectionEn, ge: homeInspectionKa };
export type { HomeInspectionCopy, HomeInspectionLocale } from "./types";
