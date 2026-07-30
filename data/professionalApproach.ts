export type ProfessionalApproachContent = {
  eyebrow: string;
  title: string;
  text: string;
  details: string[];
  note: string;
};

export const professionalApproach: Record<"ru" | "en" | "ge", Record<"reconstruction" | "roof" | "summer-kitchen", ProfessionalApproachContent>> = {
  ru: {
    reconstruction: {
      eyebrow: "Конструкция и замысел",
      title: "Соединяем эстетику старого дома с надёжными конструкциями и инженерными решениями для современной жизни.",
      text: "Сначала разбираемся, как устроен дом и какие нагрузки несут его стены, балки и крыша. Затем подбираем решения для конструкций, армопоясов, перекрытий, кровли и инженерии.",
      details: ["оцениваем нагрузки и состояние несущих элементов", "подбираем сечения балок и конструктивные узлы", "рассчитываем и выполняем армопояса, когда они нужны", "составляем смету, делим работу на этапы и согласовываем сроки"],
      note: "До начала работ фиксируем состав, последовательность и договорённости в договоре."
    },
    roof: {
      eyebrow: "Конструкция крыши",
      title: "Красота крыши начинается с точной работы с нагрузками, опорами и узлами.",
      text: "Оцениваем стропильную систему, опирание на стены и состояние материалов. Подбираем решение, которое защищает дом от воды и работает надёжно многие годы.",
      details: ["оцениваем нагрузки на стропила и опоры", "подбираем сечения и конструктивные узлы", "проверяем необходимость усиления и армопояса", "согласовываем смету, этапы и сроки до начала работ"],
      note: "Состав работ и договорённости фиксируем до выхода на объект."
    },
    "summer-kitchen": {
      eyebrow: "Основание и детали",
      title: "Соединяем эстетику двора с надёжным основанием, навесом и продуманными инженерными решениями.",
      text: "Смотрим на участок как на целое: основание, металл, кровлю, воду, электричество, свет и ежедневное использование пространства.",
      details: ["подбираем конструкцию навеса и опоры", "продумываем основание и рабочие поверхности", "заранее учитываем воду, электрику и освещение", "согласовываем смету, этапы и сроки"],
      note: "До начала работ понятно, как будет собираться объект и из чего складывается его стоимость."
    }
  },
  en: {
    reconstruction: {
      eyebrow: "Structure and intention",
      title: "We bring together the character of an old house, reliable structures and engineering for modern life.",
      text: "We first understand how the house is built and what loads its walls, beams and roof carry. Then we develop solutions for structural work, ring beams, floors, roof and utilities.",
      details: ["assessing loads and the condition of load-bearing elements", "selecting beam sections and structural junctions", "calculating and building ring beams where required", "preparing an estimate, work stages and agreed timing"],
      note: "Before work begins, the scope, sequence and agreements are recorded in the contract."
    },
    roof: {
      eyebrow: "Roof structure",
      title: "A good-looking roof starts with precise work on loads, supports and junctions.",
      text: "We assess the rafter system, its support on the walls and the condition of materials. The chosen solution protects the house from water and is built to last.",
      details: ["assessing loads on rafters and supports", "selecting sections and structural junctions", "checking where strengthening or a ring beam is needed", "agreeing the estimate, stages and timing before work begins"],
      note: "The scope and agreements are recorded before work starts on site."
    },
    "summer-kitchen": {
      eyebrow: "Base and details",
      title: "We bring together the character of the yard, a reliable base, canopy and considered engineering.",
      text: "We see the site as a whole: base, metalwork, roof, water, electricity, lighting and everyday use of the space.",
      details: ["selecting the canopy structure and supports", "planning the base and work surfaces", "allowing for water, electricity and lighting in advance", "agreeing the estimate, stages and timing"],
      note: "Before work begins, it is clear how the project will be assembled and what its cost includes."
    }
  },
  ge: {
    reconstruction: {
      eyebrow: "კონსტრუქცია და ჩანაფიქრი",
      title: "ძველი სახლის ხასიათს ვაერთიანებთ საიმედო კონსტრუქციებთან და თანამედროვე ცხოვრების საინჟინრო გადაწყვეტილებებთან.",
      text: "ჯერ ვიგებთ, როგორ არის მოწყობილი სახლი და რა დატვირთვას იღებს მისი კედლები, კოჭები და სახურავი. შემდეგ ვამუშავებთ გადაწყვეტილებებს კონსტრუქციებისთვის, არმოპოიასისთვის, გადახურვისთვის, სახურავისა და კომუნიკაციებისთვის.",
      details: ["ვაფასებთ დატვირთვებსა და მზიდი ელემენტების მდგომარეობას", "ვარჩევთ კოჭების კვეთებსა და კონსტრუქციულ კვანძებს", "საჭიროებისას ვითვლით და ვაკეთებთ არმოპოიასს", "ვადგენთ ხარჯთაღრიცხვას, ეტაპებსა და ვადებს"],
      note: "სამუშაოს დაწყებამდე სამუშაოს შემადგენლობა, თანმიმდევრობა და შეთანხმებები ფიქსირდება ხელშეკრულებაში."
    },
    roof: {
      eyebrow: "სახურავის კონსტრუქცია",
      title: "ლამაზი სახურავი იწყება დატვირთვების, საყრდენებისა და კვანძების ზუსტი გააზრებით.",
      text: "ვაფასებთ კოჭების სისტემას, კედლებზე დაყრდნობას და მასალების მდგომარეობას. შერჩეული გადაწყვეტა სახლს წყლისგან იცავს და მრავალი წლისთვის საიმედოდ მუშაობს.",
      details: ["ვაფასებთ კოჭებსა და საყრდენებზე დატვირთვებს", "ვარჩევთ კვეთებსა და კონსტრუქციულ კვანძებს", "ვამოწმებთ, სად არის საჭირო გამაგრება ან არმოპოიასი", "სამუშაოს დაწყებამდე ვათანხმებთ ხარჯთაღრიცხვას, ეტაპებსა და ვადებს"],
      note: "სამუშაოს მოცულობა და შეთანხმებები ფიქსირდება ობიექტზე გასვლამდე."
    },
    "summer-kitchen": {
      eyebrow: "საფუძველი და დეტალები",
      title: "ეზოს ხასიათს ვაერთიანებთ საიმედო საფუძველთან, ფარდულთან და გააზრებულ საინჟინრო გადაწყვეტილებებთან.",
      text: "ადგილს მთლიანობად ვუყურებთ: საფუძველი, მეტალი, სახურავი, წყალი, ელექტროობა, განათება და სივრცის ყოველდღიური გამოყენება.",
      details: ["ვარჩევთ ფარდულის კონსტრუქციასა და საყრდენებს", "ვგეგმავთ საფუძველსა და სამუშაო ზედაპირებს", "წინასწარ ვითვალისწინებთ წყალს, ელექტროობასა და განათებას", "ვათანხმებთ ხარჯთაღრიცხვას, ეტაპებსა და ვადებს"],
      note: "სამუშაოს დაწყებამდე გასაგებია, როგორ აიწყობა ობიექტი და რისგან შედგება მისი ღირებულება."
    }
  }
};
