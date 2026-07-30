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

export const hiddenProjectTemplate: ProjectCase = {
  title: "",
  location: "",
  situation: "",
  workCompleted: [],
  role: "",
  images: []
};
