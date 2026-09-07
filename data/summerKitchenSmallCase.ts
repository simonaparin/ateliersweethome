export type SummerKitchenSmallCaseLocale = "ru" | "en" | "ge";

export type SummerKitchenSmallCaseContent = {
  eyebrow: string;
  title: string;
  text: string;
  images: {
    src: string;
    alt: string;
    caption: string;
    className: string;
    width: number;
    height: number;
  }[];
};

const images = {
  finished: "/images/summer-kitchen/projects/small-kitchen/small-kitchen-finished-view.jpg",
  work: "/images/summer-kitchen/projects/small-kitchen/small-kitchen-work-zone.jpg",
  detail: "/images/summer-kitchen/projects/small-kitchen/small-kitchen-detail.jpg",
  construction: "/images/summer-kitchen/projects/small-kitchen/small-kitchen-construction.jpg",
  painting: "/images/summer-kitchen/projects/small-kitchen/small-kitchen-painting.jpg"
} as const;

export const summerKitchenSmallCase: Record<SummerKitchenSmallCaseLocale, SummerKitchenSmallCaseContent> = {
  ru: {
    eyebrow: "Ещё один реализованный объект",
    title: "Небольшая летняя кухня",
    text: "Компактная деревянная кухня в саду: собрали конструкцию и навес, устроили рабочую зону с мойкой и грилем, добавили встроенный свет и завершили пространство отделкой и деталями.",
    images: [
      { src: images.finished, alt: "Готовая небольшая летняя кухня в саду", caption: "Готовая кухня в саду", className: "small-kitchen-gallery__finished", width: 960, height: 1280 },
      { src: images.work, alt: "Рабочая зона летней кухни с мойкой и грилем", caption: "Рабочая зона с мойкой и грилем", className: "small-kitchen-gallery__work", width: 1280, height: 960 },
      { src: images.detail, alt: "Детали оформления небольшой летней кухни", caption: "Детали готового пространства", className: "small-kitchen-gallery__detail", width: 960, height: 1280 },
      { src: images.construction, alt: "Деревянная конструкция летней кухни во время строительства", caption: "Сборка конструкции и навеса", className: "small-kitchen-gallery__process", width: 960, height: 1280 },
      { src: images.painting, alt: "Подготовка летней кухни к покраске и отделке", caption: "Подготовка к покраске и отделке", className: "small-kitchen-gallery__paint", width: 1280, height: 960 }
    ]
  },
  en: {
    eyebrow: "Another completed project",
    title: "A small outdoor kitchen",
    text: "A compact wooden kitchen in the garden: we built the structure and canopy, created a work zone with a sink and grill, added built-in lighting, and completed the space with finishes and details.",
    images: [
      { src: images.finished, alt: "Completed small outdoor kitchen in a garden", caption: "The completed kitchen in the garden", className: "small-kitchen-gallery__finished", width: 960, height: 1280 },
      { src: images.work, alt: "Outdoor kitchen work zone with a sink and grill", caption: "Work zone with a sink and grill", className: "small-kitchen-gallery__work", width: 1280, height: 960 },
      { src: images.detail, alt: "Finishing details in the small outdoor kitchen", caption: "Details of the completed space", className: "small-kitchen-gallery__detail", width: 960, height: 1280 },
      { src: images.construction, alt: "Wooden outdoor kitchen structure during construction", caption: "Building the structure and canopy", className: "small-kitchen-gallery__process", width: 960, height: 1280 },
      { src: images.painting, alt: "Outdoor kitchen being prepared for painting and finishing", caption: "Preparing for painting and finishing", className: "small-kitchen-gallery__paint", width: 1280, height: 960 }
    ]
  },
  ge: {
    eyebrow: "კიდევ ერთი განხორციელებული ობიექტი",
    title: "პატარა საზაფხულო სამზარეულო",
    text: "კომპაქტური ხის სამზარეულო ბაღში: ავაწყვეთ კონსტრუქცია და ფარდული, მოვაწყვეთ სამუშაო ზონა ნიჟარითა და გრილით, დავამატეთ ჩაშენებული განათება და სივრცე მოპირკეთებითა და დეტალებით დავასრულეთ.",
    images: [
      { src: images.finished, alt: "მზა პატარა საზაფხულო სამზარეულო ბაღში", caption: "მზა სამზარეულო ბაღში", className: "small-kitchen-gallery__finished", width: 960, height: 1280 },
      { src: images.work, alt: "საზაფხულო სამზარეულოს სამუშაო ზონა ნიჟარითა და გრილით", caption: "სამუშაო ზონა ნიჟარითა და გრილით", className: "small-kitchen-gallery__work", width: 1280, height: 960 },
      { src: images.detail, alt: "პატარა საზაფხულო სამზარეულოს მოპირკეთების დეტალები", caption: "მზა სივრცის დეტალები", className: "small-kitchen-gallery__detail", width: 960, height: 1280 },
      { src: images.construction, alt: "ხის საზაფხულო სამზარეულოს კონსტრუქცია მშენებლობისას", caption: "კონსტრუქციისა და ფარდულის აწყობა", className: "small-kitchen-gallery__process", width: 960, height: 1280 },
      { src: images.painting, alt: "საზაფხულო სამზარეულოს მომზადება შეღებვისა და მოპირკეთებისთვის", caption: "შეღებვისა და მოპირკეთებისთვის მომზადება", className: "small-kitchen-gallery__paint", width: 1280, height: 960 }
    ]
  }
};
