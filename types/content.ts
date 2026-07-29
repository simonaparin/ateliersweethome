export type ImageContent = {
  src: string;
  alt: string;
  caption?: string;
};

export type HeaderContent = {
  brand: string;
  writeLabel: string;
  futureDirections?: string[];
};

export type FormContent = {
  title: string;
  text: string;
  fields: {
    name: string;
    contact: string;
    location: string;
    task: string;
    start: string;
    budget: string;
    photos: string;
  };
  budgetHint: string;
  submit: string;
  localMode: string;
  success: string;
  notSent: string;
};

export type FooterContent = {
  brand: string;
  line: string;
  regions: string;
  copyright: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ReconstructionContent = {
  locale: "ru";
  seo: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  header: HeaderContent & {
    futureDirections: string[];
  };
  hero: {
    eyebrow: string;
    title: string;
    mainPhrase: string;
    text: string;
    primaryCta: string;
    secondaryCta: string;
    languagesLine: string;
    image: ImageContent;
  };
  situations: {
    title: string;
    items: {
      title: string;
      text: string;
    }[];
  };
  inspection: {
    title: string;
    text: string;
    items: string[];
    note: string;
  };
  decisionLogic: {
    title: string;
    items: {
      title: string;
      text: string;
    }[];
    note: string;
  };
  scope: {
    title: string;
    text: string;
    items: string[];
  };
  cases: {
    title: string;
    emptyText: string;
  };
  objectContext: {
    title: string;
    text: string;
    items: {
      title: string;
      text: string;
    }[];
    note: string;
  };
  realPhotos: {
    title: string;
    text: string;
    images: ImageContent[];
  };
  modernLife: {
    title: string;
    text: string;
    items: string[];
  };
  workshop: {
    title: string;
    text: string;
    extra: string;
    image: ImageContent;
  };
  start: {
    title: string;
    steps: string[];
  };
  faq: {
    title: string;
    items: FaqItem[];
  };
  form: FormContent;
  footer: FooterContent;
};

export type SummerKitchenContent = {
  locale: "ru";
  status: "draft" | "published";
  route: "/summer-kitchen";
  seo: {
    title: string;
    description: string;
    notes: string[];
  };
  header: HeaderContent;
  hero: {
    eyebrow: string;
    title: string;
    mainPhrase: string;
    text: string;
    primaryCta: string;
    secondaryCta: string;
    image: ImageContent;
  };
  situations: {
    title: string;
    items: string[];
  };
  siteCheck: {
    title: string;
    text: string;
    items: string[];
  };
  scope: {
    title: string;
    text: string;
    items: string[];
  };
  realObject: {
    title: string;
    text: string;
    priceDraft: string;
    doNotPublishUntilConfirmed: string[];
    images: ImageContent[];
  };
  price: {
    title: string;
    text: string;
    optionalPublicNote: string;
  };
  start: {
    title: string;
    steps: string[];
  };
  faq: {
    title: string;
    items: FaqItem[];
  };
  form: FormContent;
  footer: FooterContent;
  keywordDraft: {
    ru: string[];
    en: string[];
    kaNeedsNativeReview: string[];
  };
  ownerQuestions: string[];
};

export type RoofContent = {
  locale: "ru";
  status: "draft" | "published";
  route: "/roof";
  seo: {
    title: string;
    description: string;
    notes: string[];
  };
  header: HeaderContent;
  hero: {
    eyebrow: string;
    title: string;
    mainPhrase: string;
    text: string;
    primaryCta: string;
    secondaryCta: string;
  };
  currentPhotos: {
    status: string;
    images: ImageContent[];
    warning: string;
  };
  situations: string[];
  checkBeforeWork: string[];
  scope: string[];
  neededRealCase: {
    knownFact: string;
    publicDraft: string;
    images: ImageContent[];
    neededData: string[];
  };
  videoSources?: {
    status: string;
    note: string;
    files: {
      sourcePath: string;
      title: string;
      duration: string;
      sizeMb: number;
      use: string;
    }[];
  };
  faq: {
    title: string;
    items: FaqItem[];
  };
  form: FormContent;
  footer: FooterContent;
  keywordDraft: {
    ru: string[];
    en: string[];
    kaNeedsNativeReview: string[];
  };
};
