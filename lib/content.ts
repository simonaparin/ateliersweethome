import ruReconstruction from "@/content/ru/reconstruction.json";
import ruRoof from "@/content/ru/roof.draft.json";
import ruSummerKitchen from "@/content/ru/summer-kitchen.draft.json";
import type { ReconstructionContent, RoofContent, SummerKitchenContent } from "@/types/content";

export function getReconstructionContent(locale = "ru"): ReconstructionContent {
  if (locale !== "ru") {
    return ruReconstruction as ReconstructionContent;
  }

  return ruReconstruction as ReconstructionContent;
}

export function getSummerKitchenContent(locale = "ru"): SummerKitchenContent {
  if (locale !== "ru") {
    return ruSummerKitchen as SummerKitchenContent;
  }

  return ruSummerKitchen as SummerKitchenContent;
}

export function getRoofContent(locale = "ru"): RoofContent {
  if (locale !== "ru") {
    return ruRoof as RoofContent;
  }

  return ruRoof as RoofContent;
}
