export type PrivacyLocale = "ru" | "en" | "ge";

export type PrivacyBlock = { lead?: string; text?: string; list?: string[] };
export type PrivacySection = { title: string; blocks: PrivacyBlock[] };
export type PrivacyContent = {
  title: string;
  description: string;
  effective: string;
  intro: string;
  footerLine: string;
  write: string;
  sections: PrivacySection[];
};

export const privacyLinkLabels: Record<PrivacyLocale, string> = {
  ru: "Политика конфиденциальности",
  en: "Privacy Policy",
  ge: "კონფიდენციალურობის პოლიტიკა"
};

export const termsLinkLabels: Record<PrivacyLocale, string> = {
  ru: "Условия использования",
  en: "Terms of Use",
  ge: "გამოყენების პირობები"
};

export const privacyPolicy: Record<PrivacyLocale, PrivacyContent> = {
  ru: {
    title: "Политика конфиденциальности",
    description: "Какие сведения получает сайт Atelier Sweet Home, зачем они нужны и кто ещё их видит.",
    effective: "Действует с 31 октября 2026 года",
    intro: "Здесь написано, какие сведения о вас получает сайт ateliersweethome.ge, зачем они нужны и кто ещё их видит.",
    footerLine: "Реконструкция старых домов в Грузии",
    write: "Связаться с нами",
    sections: [
      {
        title: "Кто отвечает за данные",
        blocks: [{ text: "Atelier Sweet Home, Тбилиси, Грузия." }, { text: "Почта: hello@ateliersweethome.ge" }, { text: "Телефон и WhatsApp: +995 555 12 82 31" }]
      },
      {
        title: "Что вы отправляете нам сами",
        blocks: [
          {
            text: "Когда вы заполняете форму на сайте, мы получаем:",
            list: [
              "ваше сообщение;",
              "контакт, который вы указали: телефон, почту или WhatsApp;",
              "для заявки на обследование дома: адрес или район, площадь, цель обследования, удобное время и что вас беспокоит;",
              "файлы, которые вы приложили: фото, видео, чертежи, документы (до 10 файлов, каждый до 10 МБ);",
              "название и адрес страницы, с которой отправлена заявка, дату и время."
            ]
          },
          { text: "Эти сведения нужны, чтобы ответить вам и обсудить вашу задачу." },
          { text: "Если вы звоните нам или пишете в WhatsApp, мы получаем ваш номер и то, что вы сообщили в разговоре или переписке. Переписка в WhatsApp идёт по правилам самого WhatsApp." }
        ]
      },
      {
        title: "Куда попадают заявки",
        blocks: [
          { text: "Сайт не хранит заявки у себя. Они сразу приходят в наш рабочий чат в Telegram и остаются там." },
          { text: "Мы храним заявку и переписку столько, сколько нужно, чтобы ответить вам и выполнить работу. Если вы попросите удалить их раньше, мы удалим, кроме того, что обязаны хранить по закону." }
        ]
      },
      {
        title: "Что сайт узнаёт автоматически",
        blocks: [
          { lead: "Google Analytics.", text: "Мы смотрим, сколько людей заходит на сайт, откуда они приходят, какие страницы читают и как долго. Также считаем нажатия на телефон и WhatsApp и отправку форм. Для этого Google сохраняет в вашем браузере файлы cookie и получает сведения о вашем устройстве, браузере, примерном местоположении и посещённых страницах. Сами тексты заявок и ваши контакты мы в Analytics не передаём." },
          { text: "Подробные данные о действиях на сайте хранятся в Analytics 2 месяца, данные на уровне пользователя — до 14 месяцев." },
          { lead: "Реклама Google.", text: "Мы размещаем рекламу в Google. Analytics связана с нашими рекламными аккаунтами Google Ads, рекламная персонализация включена. Это значит, что Google может использовать сведения о посещении сайта, чтобы измерять рекламу и подбирать её для вас." },
          { lead: "Microsoft Clarity.", text: "Мы смотрим, как люди пользуются сайтом: докуда листают и куда нажимают. Для этого Clarity сохраняет файлы cookie и записывает действия на странице. Текст, который вы вводите в формы, в записи скрывается." },
          { lead: "Хостинг.", text: "Сайт работает на Vercel. Как и любой хостинг, он обрабатывает технические данные запросов, например IP-адрес. Кроме того, IP-адрес ненадолго попадает в память сервера, чтобы защитить форму от спама: не больше 5 заявок за 10 минут с одного адреса. В базу данных мы его не записываем." }
        ]
      },
      {
        title: "Как отключить cookie и рекламу",
        blocks: [{ list: ["Запретите или удалите cookie в настройках браузера. Сайт продолжит работать.", "Отключите Google Analytics дополнением от Google: tools.google.com/dlpage/gaoptout", "Управляйте рекламой на странице myadcenter.google.com"] }]
      },
      {
        title: "Кому передаются данные",
        blocks: [
          { text: "Мы не продаём ваши данные. Их получают только сервисы, без которых сайт и заявки не работают:", list: ["Telegram — доставка и хранение заявок;", "Google — статистика и реклама;", "Microsoft — запись действий на сайте;", "Vercel — работа сайта."] },
          { text: "Серверы этих компаний могут находиться за пределами Грузии. Мы также раскроем данные государственным органам, если этого требует закон." }
        ]
      },
      {
        title: "Данные Google, к которым мы подключаемся",
        blocks: [
          { text: "У нас есть небольшая внутренняя программа, подключённая к Google через вход в аккаунт Google (OAuth). Она работает только с нашими собственными аккаунтами Google Ads, Google Analytics и Search Console. Посетители сайта и клиенты в неё не входят, и данные их аккаунтов Google она не получает." },
          { text: "Программа читает статистику рекламы, посещений и поиска, а также меняет настройки наших кампаний и Analytics, например бюджеты и потолок цены клика." },
          { text: "Мы используем эти данные только для своей рекламы и развития сайта. Отчёты хранятся на нашем компьютере, а при подготовке отчётов мы используем ИИ-помощника Claude компании Anthropic. Мы не продаём эти данные и не передаём их рекламным сетям или брокерам данных." },
          { text: "Мы используем данные, полученные через API Google, в соответствии с Google API Services User Data Policy, включая требования Limited Use. Доступ можно отозвать в настройках аккаунта Google: myaccount.google.com/permissions" }
        ]
      },
      {
        title: "Ваши права",
        blocks: [
          { text: "Вы можете узнать, какие данные о вас у нас есть, получить их копию, исправить их, удалить или отозвать согласие на обработку. Напишите на hello@ateliersweethome.ge, мы ответим в срок, установленный законом." },
          { text: "Если вы считаете, что ваши права нарушены, вы можете обратиться в Службу защиты персональных данных Грузии." }
        ]
      },
      {
        title: "Изменения",
        blocks: [{ text: "Если мы изменим способы работы с данными, мы обновим эту страницу и дату в её начале." }]
      }
    ]
  },
  en: {
    title: "Privacy Policy",
    description: "What information the Atelier Sweet Home website receives, why it is needed and who else can see it.",
    effective: "Effective from 31 October 2026",
    intro: "This page explains what information the ateliersweethome.ge website receives about you, why it is needed and who else can see it.",
    footerLine: "Old house reconstruction in Georgia",
    write: "Contact us",
    sections: [
      {
        title: "Who is responsible for your data",
        blocks: [{ text: "Atelier Sweet Home, Tbilisi, Georgia." }, { text: "Email: hello@ateliersweethome.ge" }, { text: "Phone and WhatsApp: +995 555 12 82 31" }]
      },
      {
        title: "What you send us yourself",
        blocks: [
          {
            text: "When you fill in a form on the website, we receive:",
            list: [
              "your message;",
              "the contact you gave us: phone, email or WhatsApp;",
              "for a home inspection request: the address or area, floor area, purpose of the inspection, a convenient time and what concerns you;",
              "the files you attached: photos, videos, drawings, documents (up to 10 files, each up to 10 MB);",
              "the title and address of the page the request was sent from, with the date and time."
            ]
          },
          { text: "We need this information to reply to you and discuss your project." },
          { text: "If you call us or write on WhatsApp, we receive your number and whatever you tell us in the call or chat. WhatsApp conversations are governed by WhatsApp's own rules." }
        ]
      },
      {
        title: "Where requests go",
        blocks: [
          { text: "The website does not store requests. They go straight to our work chat in Telegram and stay there." },
          { text: "We keep a request and the related correspondence for as long as we need to reply to you and carry out the work. If you ask us to delete them sooner, we will, except for anything the law requires us to keep." }
        ]
      },
      {
        title: "What the website learns automatically",
        blocks: [
          { lead: "Google Analytics.", text: "We look at how many people visit the website, where they come from, which pages they read and for how long. We also count clicks on the phone number and WhatsApp, and form submissions. To do this, Google stores cookies in your browser and receives information about your device, browser, approximate location and the pages you visited. We do not pass the text of your requests or your contact details to Analytics." },
          { text: "Detailed data about actions on the website is kept in Analytics for 2 months, and user-level data for up to 14 months." },
          { lead: "Google advertising.", text: "We advertise on Google. Analytics is linked to our Google Ads accounts and ads personalization is turned on. This means Google may use information about your visit to measure advertising and select ads for you." },
          { lead: "Microsoft Clarity.", text: "We look at how people use the website: how far they scroll and what they click. To do this, Clarity stores cookies and records actions on the page. Text you type into forms is masked in recordings." },
          { lead: "Hosting.", text: "The website runs on Vercel. Like any hosting provider, it processes technical request data such as your IP address. Your IP address is also held briefly in server memory to protect the form from spam: no more than 5 requests in 10 minutes from one address. We do not write it to a database." }
        ]
      },
      {
        title: "How to turn off cookies and advertising",
        blocks: [{ list: ["Block or delete cookies in your browser settings. The website will keep working.", "Turn off Google Analytics with Google's add-on: tools.google.com/dlpage/gaoptout", "Manage advertising at myadcenter.google.com"] }]
      },
      {
        title: "Who receives your data",
        blocks: [
          { text: "We do not sell your data. It is received only by the services the website and requests depend on:", list: ["Telegram — delivering and storing requests;", "Google — statistics and advertising;", "Microsoft — recording actions on the website;", "Vercel — running the website."] },
          { text: "These companies' servers may be located outside Georgia. We will also disclose data to public authorities where the law requires it." }
        ]
      },
      {
        title: "Google data we connect to",
        blocks: [
          { text: "We have a small internal program connected to Google through Google account sign-in (OAuth). It works only with our own Google Ads, Google Analytics and Search Console accounts. Website visitors and clients do not sign in to it, and it receives no data from their Google accounts." },
          { text: "The program reads advertising, visit and search statistics, and changes settings of our campaigns and Analytics, such as budgets and the maximum cost per click." },
          { text: "We use this data only for our own advertising and website development. Reports are stored on our computer, and we use the AI assistant Claude by Anthropic to prepare them. We do not sell this data or pass it to advertising networks or data brokers." },
          { text: "Our use of information received from Google APIs adheres to the Google API Services User Data Policy, including the Limited Use requirements. Access can be revoked in Google account settings: myaccount.google.com/permissions" }
        ]
      },
      {
        title: "Your rights",
        blocks: [
          { text: "You can find out what data we hold about you, get a copy, correct it, delete it or withdraw your consent to processing. Write to hello@ateliersweethome.ge and we will reply within the time set by law." },
          { text: "If you believe your rights have been violated, you can contact the Personal Data Protection Service of Georgia." }
        ]
      },
      {
        title: "Changes",
        blocks: [{ text: "If we change how we handle data, we will update this page and the date at the top." }]
      }
    ]
  },
  ge: {
    title: "კონფიდენციალურობის პოლიტიკა",
    description: "რა ინფორმაციას იღებს Atelier Sweet Home-ის ვებგვერდი, რატომ არის ის საჭირო და ვინ ხედავს მას.",
    effective: "მოქმედებს 2026 წლის 31 ოქტომბრიდან",
    intro: "აქ აღწერილია, რა ინფორმაციას იღებს თქვენ შესახებ ვებგვერდი ateliersweethome.ge, რატომ არის ის საჭირო და კიდევ ვინ ხედავს მას.",
    footerLine: "ძველი სახლების რეკონსტრუქცია საქართველოში",
    write: "მოგვწერეთ",
    sections: [
      {
        title: "ვინ არის პასუხისმგებელი მონაცემებზე",
        blocks: [{ text: "Atelier Sweet Home, თბილისი, საქართველო." }, { text: "ელფოსტა: hello@ateliersweethome.ge" }, { text: "ტელეფონი და WhatsApp: +995 555 12 82 31" }]
      },
      {
        title: "რას გვიგზავნით თქვენ თვითონ",
        blocks: [
          {
            text: "როცა ვებგვერდზე ფორმას ავსებთ, ვიღებთ:",
            list: [
              "თქვენს შეტყობინებას;",
              "თქვენ მიერ მითითებულ კონტაქტს: ტელეფონს, ელფოსტას ან WhatsApp-ს;",
              "სახლის შემოწმების განაცხადისთვის: მისამართს ან უბანს, ფართობს, შემოწმების მიზანს, მოსახერხებელ დროს და იმას, რაც გაწუხებთ;",
              "დართულ ფაილებს: ფოტოებს, ვიდეოებს, ნახაზებს, დოკუმენტებს (მაქსიმუმ 10 ფაილი, თითოეული 10 მბ-მდე);",
              "იმ გვერდის სახელსა და მისამართს, საიდანაც განაცხადი გაიგზავნა, თარიღსა და დროს."
            ]
          },
          { text: "ეს ინფორმაცია საჭიროა, რომ გიპასუხოთ და თქვენი ამოცანა განვიხილოთ." },
          { text: "თუ დაგვირეკავთ ან WhatsApp-ში მოგვწერთ, ვიღებთ თქვენს ნომერს და იმას, რასაც საუბარში ან მიმოწერაში გვეტყვით. WhatsApp-ში მიმოწერაზე თავად WhatsApp-ის წესები ვრცელდება." }
        ]
      },
      {
        title: "სად ხვდება განაცხადები",
        blocks: [
          { text: "ვებგვერდი განაცხადებს არ ინახავს. ისინი პირდაპირ ჩვენს სამუშაო ჩატში მოდის Telegram-ში და იქ რჩება." },
          { text: "განაცხადსა და მიმოწერას ვინახავთ იმდენ ხანს, რამდენიც საჭიროა თქვენთვის პასუხის გასაცემად და სამუშაოს შესასრულებლად. თუ ადრე წაშლას გვთხოვთ, წავშლით, გარდა იმისა, რისი შენახვაც კანონით გვევალება." }
        ]
      },
      {
        title: "რას იგებს ვებგვერდი ავტომატურად",
        blocks: [
          { lead: "Google Analytics.", text: "ვხედავთ, რამდენი ადამიანი შემოდის ვებგვერდზე, საიდან მოდიან, რომელ გვერდებს კითხულობენ და რამდენ ხანს. ასევე ვითვლით ტელეფონსა და WhatsApp-ზე დაჭერებს და ფორმების გაგზავნას. ამისთვის Google თქვენს ბრაუზერში ინახავს cookie ფაილებს და იღებს ინფორმაციას თქვენი მოწყობილობის, ბრაუზერის, მიახლოებითი მდებარეობისა და მონახულებული გვერდების შესახებ. განაცხადების ტექსტებსა და თქვენს კონტაქტებს Analytics-ს არ ვაწვდით." },
          { text: "ვებგვერდზე მოქმედებების დეტალური მონაცემები Analytics-ში 2 თვე ინახება, მომხმარებლის დონის მონაცემები კი — 14 თვემდე." },
          { lead: "Google-ის რეკლამა.", text: "რეკლამას ვათავსებთ Google-ში. Analytics დაკავშირებულია ჩვენს Google Ads ანგარიშებთან და რეკლამის პერსონალიზაცია ჩართულია. ეს ნიშნავს, რომ Google-მა შეიძლება ვებგვერდზე თქვენი ვიზიტის შესახებ ინფორმაცია გამოიყენოს რეკლამის გასაზომად და თქვენთვის შესარჩევად." },
          { lead: "Microsoft Clarity.", text: "ვხედავთ, როგორ იყენებენ ადამიანები ვებგვერდს: სად ჩადიან გვერდზე და რას აჭერენ. ამისთვის Clarity ინახავს cookie ფაილებს და იწერს მოქმედებებს გვერდზე. ფორმებში შეყვანილი ტექსტი ჩანაწერებში იმალება." },
          { lead: "ჰოსტინგი.", text: "ვებგვერდი მუშაობს Vercel-ზე. როგორც ნებისმიერი ჰოსტინგი, ის ამუშავებს მოთხოვნების ტექნიკურ მონაცემებს, მაგალითად IP-მისამართს. გარდა ამისა, IP-მისამართი მცირე ხნით ხვდება სერვერის მეხსიერებაში, რათა ფორმა სპამისგან დავიცვათ: ერთი მისამართიდან 10 წუთში არაუმეტეს 5 განაცხადისა. მონაცემთა ბაზაში მას არ ვწერთ." }
        ]
      },
      {
        title: "როგორ გამორთოთ cookie და რეკლამა",
        blocks: [{ list: ["აკრძალეთ ან წაშალეთ cookie ბრაუზერის პარამეტრებში. ვებგვერდი გააგრძელებს მუშაობას.", "გამორთეთ Google Analytics Google-ის დამატებით: tools.google.com/dlpage/gaoptout", "მართეთ რეკლამა გვერდზე myadcenter.google.com"] }]
      },
      {
        title: "ვინ იღებს მონაცემებს",
        blocks: [
          { text: "თქვენს მონაცემებს არ ვყიდით. მათ იღებენ მხოლოდ ის სერვისები, რომელთა გარეშეც ვებგვერდი და განაცხადები არ იმუშავებს:", list: ["Telegram — განაცხადების მიწოდება და შენახვა;", "Google — სტატისტიკა და რეკლამა;", "Microsoft — ვებგვერდზე მოქმედებების ჩაწერა;", "Vercel — ვებგვერდის მუშაობა."] },
          { text: "ამ კომპანიების სერვერები შეიძლება საქართველოს გარეთ მდებარეობდეს. მონაცემებს სახელმწიფო ორგანოებსაც გადავცემთ, თუ ამას კანონი მოითხოვს." }
        ]
      },
      {
        title: "Google-ის მონაცემები, რომლებსაც ვუკავშირდებით",
        blocks: [
          { text: "გვაქვს პატარა შიდა პროგრამა, რომელიც Google-ს უკავშირდება Google ანგარიშით შესვლის გზით (OAuth). ის მუშაობს მხოლოდ ჩვენს საკუთარ Google Ads, Google Analytics და Search Console ანგარიშებთან. ვებგვერდის სტუმრები და კლიენტები მასში არ შედიან და ის მათი Google ანგარიშების მონაცემებს არ იღებს." },
          { text: "პროგრამა კითხულობს რეკლამის, ვიზიტებისა და ძიების სტატისტიკას და ცვლის ჩვენი კამპანიებისა და Analytics-ის პარამეტრებს, მაგალითად ბიუჯეტებსა და დაწკაპების ფასის ზღვარს." },
          { text: "ამ მონაცემებს ვიყენებთ მხოლოდ ჩვენი რეკლამისა და ვებგვერდის განვითარებისთვის. ანგარიშები ჩვენს კომპიუტერში ინახება, მათ მოსამზადებლად კი ვიყენებთ კომპანია Anthropic-ის AI ასისტენტს Claude-ს. ამ მონაცემებს არ ვყიდით და არ გადავცემთ სარეკლამო ქსელებს ან მონაცემთა ბროკერებს." },
          { text: "Google API-ებით მიღებულ ინფორმაციას ვიყენებთ Google API Services User Data Policy-ის შესაბამისად, Limited Use მოთხოვნების ჩათვლით. წვდომის გაუქმება შესაძლებელია Google ანგარიშის პარამეტრებში: myaccount.google.com/permissions" }
        ]
      },
      {
        title: "თქვენი უფლებები",
        blocks: [
          { text: "შეგიძლიათ გაიგოთ, რა მონაცემები გვაქვს თქვენ შესახებ, მიიღოთ მათი ასლი, შეასწოროთ, წაშალოთ ან გააუქმოთ დამუშავებაზე თანხმობა. მოგვწერეთ მისამართზე hello@ateliersweethome.ge და გიპასუხებთ კანონით დადგენილ ვადაში." },
          { text: "თუ ფიქრობთ, რომ თქვენი უფლებები დაირღვა, შეგიძლიათ მიმართოთ საქართველოს პერსონალურ მონაცემთა დაცვის სამსახურს." }
        ]
      },
      {
        title: "ცვლილებები",
        blocks: [{ text: "თუ მონაცემებთან მუშაობის წესს შევცვლით, განვაახლებთ ამ გვერდს და მის დასაწყისში მითითებულ თარიღს." }]
      }
    ]
  }
};
