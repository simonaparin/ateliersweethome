export type RemoteCollaborationContent = {
  eyebrow: string;
  title: string;
  text: string;
  details: string[];
  note: string;
};

export type RemoteKitchenCaseContent = RemoteCollaborationContent & {
  referenceTitle: string;
  referenceText: string;
  references: { src: string; alt: string }[];
};

export const remoteCollaboration: Record<"ru" | "en" | "ge", Record<"reconstruction" | "roof" | "summer-kitchen", RemoteCollaborationContent>> = {
  ru: {
    reconstruction: {
      eyebrow: "Удалённый формат",
      title: "Начинаем работу по фото и продолжаем её в понятном ритме связи.",
      text: "Если заказчик находится в другой стране или не может постоянно быть на объекте, обсуждаем задачу по фотографиям, видео и замерам. Согласуем решения, смету, этапы и сроки до начала работ.",
      details: ["собираем исходные данные и уточняем задачу", "показываем ход работ на фото и видео", "фиксируем согласованные решения и изменения", "остаемся на связи на каждом этапе"],
      note: "Удалённый формат подходит, когда решения, материалы и последовательность работ обсуждаются заранее."
    },
    roof: {
      eyebrow: "Удалённый формат",
      title: "Крышу можно обсудить по материалам с объекта и вести с регулярными отчётами.",
      text: "По фото, видео и замерам разбираем исходное состояние, согласуем объём работ, расчёты, смету и сроки. Во время работ отправляем понятные фото- и видеоотчёты по этапам.",
      details: ["принимаем фото, видео и размеры", "согласуем конструктивное решение и состав работ", "фиксируем этапы и сроки до выхода на объект", "держим заказчика в курсе хода работ"],
      note: "Такой формат удобен владельцам, которые находятся далеко от дома."
    },
    "summer-kitchen": {
      eyebrow: "Удалённый формат",
      title: "Идею можно согласовать на расстоянии и точно воплотить на участке.",
      text: "Работа начинается с референсов, фотографий места, замеров и понятной задачи. Затем согласуем конструкцию, материалы, смету, последовательность и сроки; по ходу работ отправляем фото и видео.",
      details: ["принимаем референсы и пожелания к будущей кухне", "проверяем размеры, основание и коммуникации", "согласуем расчёты, смету и этапы", "ведём объект с регулярными фото- и видеоотчётами"],
      note: "У нас есть реализованный опыт такого взаимодействия — история ниже."
    }
  },
  en: {
    reconstruction: {
      eyebrow: "Remote collaboration",
      title: "We can start from photos and keep the work clear through regular communication.",
      text: "When the owner is abroad or cannot be on site all the time, we discuss the task using photos, video and measurements. We agree on solutions, estimate, stages and timing before work begins.",
      details: ["collecting the initial information and clarifying the task", "showing progress through photo and video updates", "recording agreed decisions and changes", "staying in contact at every stage"],
      note: "Remote collaboration works well when decisions, materials and the work sequence are agreed in advance."
    },
    roof: {
      eyebrow: "Remote collaboration",
      title: "A roof can be discussed from site materials and managed with regular reports.",
      text: "Using photos, video and measurements, we review the starting condition and agree on the scope, calculations, estimate and timing. During the work, we send clear photo and video updates for each stage.",
      details: ["reviewing photos, video and dimensions", "agreeing on the structural solution and scope", "recording stages and timing before coming to site", "keeping the owner updated on progress"],
      note: "This format is convenient for owners who are far from the house."
    },
    "summer-kitchen": {
      eyebrow: "Remote collaboration",
      title: "An idea can be agreed from a distance and accurately built on site.",
      text: "The work starts with references, site photographs, measurements and a clear brief. Then we agree on the structure, materials, estimate, sequence and timing, with photo and video updates throughout the work.",
      details: ["reviewing references and wishes for the future kitchen", "checking dimensions, base and utilities", "agreeing on calculations, estimate and stages", "managing the work with regular photo and video updates"],
      note: "We have a completed project carried out in this way — its story is below."
    }
  },
  ge: {
    reconstruction: {
      eyebrow: "დისტანციური თანამშრომლობა",
      title: "საქმეს ფოტოებით ვიწყებთ და მთელი პროცესის განმავლობაში მკაფიო კავშირს ვინარჩუნებთ.",
      text: "თუ მფლობელი სხვა ქვეყანაშია ან ობიექტზე მუდმივად ვერ იმყოფება, ამოცანას ფოტოებით, ვიდეოებითა და აზომვებით განვიხილავთ. სამუშაოს დაწყებამდე ვათანხმებთ გადაწყვეტილებებს, ხარჯთაღრიცხვას, ეტაპებსა და ვადებს.",
      details: ["ვაგროვებთ საწყის მასალას და ვაზუსტებთ ამოცანას", "მიმდინარეობას ფოტო- და ვიდეოანგარიშებით ვაჩვენებთ", "შეთანხმებულ გადაწყვეტილებებსა და ცვლილებებს ვაფიქსირებთ", "ყველა ეტაპზე კავშირზე ვრჩებით"],
      note: "დისტანციური ფორმატი ეფექტიანია, როცა გადაწყვეტილებები, მასალები და სამუშაოების მიმდევრობა წინასწარ შეთანხმებულია."
    },
    roof: {
      eyebrow: "დისტანციური თანამშრომლობა",
      title: "სახურავის საკითხი ობიექტის მასალებით განიხილება და რეგულარული ანგარიშებით იმართება.",
      text: "ფოტოების, ვიდეოებისა და აზომვების საფუძველზე ვაფასებთ საწყის მდგომარეობას და ვათანხმებთ სამუშაოს მოცულობას, გამოთვლებს, ხარჯთაღრიცხვასა და ვადებს. მუშაობისას თითოეული ეტაპის მკაფიო ფოტო- და ვიდეოანგარიშს ვაგზავნით.",
      details: ["ვიღებთ ფოტოებს, ვიდეოებსა და ზომებს", "ვათანხმებთ კონსტრუქციულ გადაწყვეტასა და სამუშაოს შემადგენლობას", "ობიექტზე გასვლამდე ვაფიქსირებთ ეტაპებსა და ვადებს", "მფლობელს მუშაობის მსვლელობის შესახებ ვატყობინებთ"],
      note: "ეს ფორმატი მოსახერხებელია მფლობელებისთვის, რომლებიც სახლიდან შორს არიან."
    },
    "summer-kitchen": {
      eyebrow: "დისტანციური თანამშრომლობა",
      title: "იდეას დისტანციურად ვათანხმებთ და ნაკვეთზე ზუსტად ვახორციელებთ.",
      text: "საქმე იწყება რეფერენსებით, ადგილის ფოტოებით, აზომვებითა და მკაფიო ამოცანით. შემდეგ ვათანხმებთ კონსტრუქციას, მასალებს, ხარჯთაღრიცხვას, მიმდევრობასა და ვადებს; მუშაობისას ფოტო- და ვიდეოანგარიშებს ვაგზავნით.",
      details: ["ვიღებთ რეფერენსებსა და სამომავლო სამზარეულოს სურვილებს", "ვამოწმებთ ზომებს, საფუძველსა და კომუნიკაციებს", "ვათანხმებთ გამოთვლებს, ხარჯთაღრიცხვასა და ეტაპებს", "ობიექტს რეგულარული ფოტო- და ვიდეოანგარიშებით ვმართავთ"],
      note: "ასეთი თანამშრომლობის უკვე დასრულებული გამოცდილება გვაქვს — ისტორია ქვემოთაა."
    }
  }
};

export const remoteKitchenCase: Record<"ru" | "en" | "ge", RemoteKitchenCaseContent> = {
  ru: {
    eyebrow: "Реальный удалённый проект",
    title: "Летняя кухня, согласованная с заказчиком удалённо",
    text: "Заказчик находился в другой стране. Он прислал референсы будущей кухни, фотографии участка и рассказал, каким должен быть результат. Мы сделали замеры, выполнили расчёты, согласовали проект и собрали кухню по этой идее.",
    referenceTitle: "Референсы будущей кухни",
    referenceText: "Два изображения, подготовленные заказчиком в ChatGPT и переданные команде как ориентир для проекта.",
    references: [
      { src: "/images/summer-kitchen/references/kitchen-reference-1.jpg", alt: "Первый референс будущей летней кухни от заказчика" },
      { src: "/images/summer-kitchen/references/kitchen-reference-2.jpg", alt: "Второй референс будущей летней кухни от заказчика" }
    ],
    details: ["все решения согласовывали удалённо", "сделали основание, навес, рабочую зону и подключили необходимые коммуникации", "конструкцию навеса рассчитали с учётом снеговой нагрузки и круглогодичного использования", "после завершения заказчик приехал на объект и убедился, что результат соответствует согласованному плану"],
    note: "Так выглядит работа от референса и расчётов до готовой кухни на участке."
  },
  en: {
    eyebrow: "A real remote project",
    title: "An outdoor kitchen agreed remotely with the client",
    text: "The client was in another country. They sent references for the future kitchen, photographs of the site and a clear description of the result they wanted. We took measurements, completed the calculations, agreed the project and built the kitchen around that idea.",
    referenceTitle: "References for the future kitchen",
    referenceText: "Two images the client prepared in ChatGPT and shared with the team as the visual direction for the project.",
    references: [
      { src: "/images/summer-kitchen/references/kitchen-reference-1.jpg", alt: "First reference for the future outdoor kitchen from the client" },
      { src: "/images/summer-kitchen/references/kitchen-reference-2.jpg", alt: "Second reference for the future outdoor kitchen from the client" }
    ],
    details: ["all decisions were agreed remotely", "we built the base, canopy and work zone, and connected the required utilities", "the canopy structure was calculated for snow load and year-round use", "after completion, the client visited the site and confirmed that the result matched the agreed plan"],
    note: "This is the full path from references and calculations to a completed outdoor kitchen."
  },
  ge: {
    eyebrow: "რეალური დისტანციური პროექტი",
    title: "საზაფხულო სამზარეულო, რომელიც დამკვეთთან დისტანციურად შეთანხმდა",
    text: "დამკვეთი სხვა ქვეყანაში იმყოფებოდა. მან მომავალი სამზარეულოს რეფერენსები, ადგილის ფოტოები და სასურველი შედეგის აღწერა გამოგვიგზავნა. გავაკეთეთ აზომვები, შევასრულეთ გამოთვლები, შევათანხმეთ პროექტი და სამზარეულო ამ იდეის მიხედვით ავაწყვეთ.",
    referenceTitle: "მომავალი სამზარეულოს რეფერენსები",
    referenceText: "ორი გამოსახულება, რომელიც დამკვეთმა ChatGPT-ში მოამზადა და პროექტის ვიზუალურ ორიენტირად გადასცა გუნდს.",
    references: [
      { src: "/images/summer-kitchen/references/kitchen-reference-1.jpg", alt: "დამკვეთის პირველი რეფერენსი მომავალი საზაფხულო სამზარეულოსთვის" },
      { src: "/images/summer-kitchen/references/kitchen-reference-2.jpg", alt: "დამკვეთის მეორე რეფერენსი მომავალი საზაფხულო სამზარეულოსთვის" }
    ],
    details: ["ყველა გადაწყვეტილება დისტანციურად შეთანხმდა", "გავაკეთეთ საფუძველი, ფარდული და სამუშაო ზონა და მივიყვანეთ საჭირო კომუნიკაციები", "ფარდულის კონსტრუქცია თოვლის დატვირთვისა და მთელი წლის გამოყენების გათვალისწინებით დავთვალეთ", "დასრულების შემდეგ დამკვეთი ობიექტზე ჩამოვიდა და დაადასტურა, რომ შედეგი შეთანხმებულ გეგმას შეესაბამებოდა"],
    note: "ეს არის სრული გზა რეფერენსებიდან და გამოთვლებიდან ნაკვეთზე დასრულებულ სამზარეულომდე."
  }
};
