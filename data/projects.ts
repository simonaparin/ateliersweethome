export type ProjectCase = {
  title: string;
  location: string;
  situation: string;
  workCompleted: string[];
  role: string;
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
};

export const reconstructionCases: ProjectCase[] = [
  {
    title: "Дом Т: восстановление для круглогодичной жизни",
    location: "Грузия · частный дом",
    situation:
      "Старый дом был куплен в повреждённом состоянии. Задача состояла в том, чтобы сохранить его характер и подготовить к нормальной жизни круглый год.",
    workCompleted: [
      "веранда и новые проёмы",
      "отопление, водоснабжение и электрика",
      "два санузла",
      "жилая отделка и обустройство дома"
    ],
    role:
      "Объект напарника мастерской; в восстановлении дома он участвовал лично. Показываем только подтверждённые решения и реальные фотографии.",
    images: [
      {
        src: "/images/reconstruction/projects/house-t/house-t-night-veranda.jpg",
        alt: "Дом с новой верандой в вечернем освещении",
        caption: "Веранда и новые проёмы"
      },
      {
        src: "/images/reconstruction/projects/house-t/house-t-kitchen-interior.jpg",
        alt: "Кухня внутри восстановленного дома",
        caption: "Жизнь внутри дома"
      },
      {
        src: "/images/reconstruction/projects/house-t/house-t-room-restored-interior.jpg",
        alt: "Светлая жилая комната после восстановления",
        caption: "Жилая отделка"
      },
      {
        src: "/images/reconstruction/projects/house-t/house-t-bathroom.jpg",
        alt: "Светлая ванная комната в восстановленном доме",
        caption: "Санузел для круглогодичной жизни"
      }
    ]
  }
];

export const localizedReconstructionCases: Record<"en" | "ge", ProjectCase[]> = {
  en: [{
    title: "House T: restoration for year-round living",
    location: "Georgia · private home",
    situation: "An old private house was bought in damaged condition and restored for comfortable year-round living.",
    workCompleted: ["veranda and new openings", "heating, water supply and electrical work", "two bathrooms", "interior finishing and arranging the home for living"],
    role: "This is the workshop partner's house. He took part in the restoration personally and lives there.",
    images: [
      { src: "/images/reconstruction/projects/house-t/house-t-night-veranda.jpg", alt: "House with the new veranda in evening light", caption: "Veranda and new openings" },
      { src: "/images/reconstruction/projects/house-t/house-t-kitchen-interior.jpg", alt: "Kitchen inside the restored house", caption: "Life inside the house" },
      { src: "/images/reconstruction/projects/house-t/house-t-room-restored-interior.jpg", alt: "Bright living room after restoration", caption: "Interior finishing" },
      { src: "/images/reconstruction/projects/house-t/house-t-bathroom.jpg", alt: "Bathroom in the restored house", caption: "Bathroom for year-round living" }
    ]
  }],
  ge: [{
    title: "სახლი T: აღდგენა მთელი წლის განმავლობაში საცხოვრებლად",
    location: "საქართველო · კერძო სახლი",
    situation: "ძველი კერძო სახლი შეძენილი იყო დაზიანებულ მდგომარეობაში და აღდგა მთელი წლის განმავლობაში კომფორტული საცხოვრებლისთვის.",
    workCompleted: ["ვერანდა და ახალი ღიობები", "გათბობა, წყალმომარაგება და ელექტროობა", "ორი სველი წერტილი", "შიდა მოპირკეთება და სახლის საცხოვრებლად მოწყობა"],
    role: "ეს არის სახელოსნოს პარტნიორის სახლი; მან აღდგენაში პირადად მიიღო მონაწილეობა და დღეს აქ ცხოვრობს.",
    images: [
      { src: "/images/reconstruction/projects/house-t/house-t-night-veranda.jpg", alt: "სახლი ახალი ვერანდით საღამოს განათებაში", caption: "ვერანდა და ახალი ღიობები" },
      { src: "/images/reconstruction/projects/house-t/house-t-kitchen-interior.jpg", alt: "სამზარეულო აღდგენილი სახლის შიგნით", caption: "ცხოვრება სახლის შიგნით" },
      { src: "/images/reconstruction/projects/house-t/house-t-room-restored-interior.jpg", alt: "ნათელი საცხოვრებელი ოთახი აღდგენის შემდეგ", caption: "შიდა მოპირკეთება" },
      { src: "/images/reconstruction/projects/house-t/house-t-bathroom.jpg", alt: "სველი წერტილი აღდგენილ სახლში", caption: "სველი წერტილი მთელი წლის განმავლობაში საცხოვრებლად" }
    ]
  }]
};

export const hiddenProjectTemplate: ProjectCase = {
  title: "",
  location: "",
  situation: "",
  workCompleted: [],
  role: "",
  images: []
};
