import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { ContactLinks } from "@/components/ContactLinks";
import { InquiryForm } from "@/components/InquiryForm";
import { contactConfig } from "@/data/contacts";
import { siteConfig } from "@/data/site";
import type { FormContent } from "@/types/content";

const headerContent = {
  brand: "Atelier Sweet Home",
  writeLabel: "Написать"
};

const formContent: FormContent = {
  title: "Опишите задачу",
  text: "Пришлите фотографии, укажите место и коротко напишите, что нужно сделать: дом, крыша, летняя кухня или навес.",
  fields: {
    name: "Имя",
    contact: "Телефон, Telegram, WhatsApp или email",
    location: "Где находится объект",
    task: "Что хотите сделать",
    start: "Желаемый срок начала — необязательно",
    budget: "Ориентир по бюджету — необязательно",
    photos: "Фотографии — до 10 файлов"
  },
  budgetHint: "Помогает сразу понять подходящий масштаб решения.",
  submit: "Подготовить обращение",
  localMode: "Форма готовится под Telegram bot. Пока можно отправить письмо на AI7695-98@gmail.com.",
  success: "Спасибо. Сообщение получено. Мы посмотрим материалы и свяжемся с вами.",
  notSent: "Данные проверены, но пока никуда не отправлены: способ получения заявок еще не настроен."
};

const contactRows = [
  {
    title: "Телефон",
    value: contactConfig.phone || "Пока не публикуем",
    href: contactConfig.phone ? `tel:${contactConfig.phone}` : undefined,
    text: "Можно позвонить или написать, если удобнее начать с короткого разговора."
  },
  {
    title: "WhatsApp",
    value: contactConfig.whatsapp || "Можно подключить",
    href: contactConfig.whatsapp || undefined,
    text: "Удобно отправить фото объекта, геолокацию и короткое голосовое сообщение."
  },
  {
    title: "Telegram",
    value: contactConfig.telegram || "Ждем bot username",
    href: contactConfig.telegram || undefined,
    text: "После подключения бота заявки с сайта будут приходить в общий Telegram-чат."
  },
  {
    title: "Email",
    value: contactConfig.email || "Не указан",
    href: contactConfig.email ? `mailto:${contactConfig.email}` : undefined,
    text: "Подходит для длинного описания, файлов и спокойной переписки."
  }
];

export const metadata: Metadata = {
  title: "Связаться с Atelier Sweet Home | Грузия",
  description: "Контакты Atelier Sweet Home: реконструкция старых домов, крыши, летние кухни и навесы в Грузии.",
  alternates: {
    canonical: "/contacts"
  },
  openGraph: {
    title: "Связаться с Atelier Sweet Home",
    description: "Пришлите фото объекта и коротко опишите задачу.",
    url: "/contacts",
    siteName: siteConfig.name,
    locale: "ru_GE",
    type: "website"
  }
};

export default function ContactsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Связаться с Atelier Sweet Home",
    url: `${siteConfig.siteUrl}/contacts`,
    about: {
      "@type": "ProfessionalService",
      name: siteConfig.name,
      areaServed: ["Tbilisi", "Kakheti", "Georgia"],
      email: contactConfig.email || undefined,
      telephone: contactConfig.phone || undefined
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header content={headerContent} contacts={contactConfig} activePath="/contacts" />

      <main>
        <section className="contacts-hero" aria-labelledby="contacts-title">
          <div>
            <p className="eyebrow">Связь</p>
            <h1 id="contacts-title">Покажите объект и коротко опишите задачу</h1>
          </div>
          <p className="hero-text">
            Лучше всего начать с фотографий: общий вид, проблемное место, крыша или участок.
            По ним можно предварительно понять характер задачи и договориться о следующем шаге.
          </p>
        </section>

        <section className="section contact-options-section" aria-labelledby="channels-title">
          <div className="section-heading">
            <p className="eyebrow">Каналы</p>
            <h2 id="channels-title">Как с нами связаться</h2>
          </div>
          <div className="contact-option-grid">
            {contactRows.map((item) => (
              <article key={item.title}>
                <span>{item.title}</span>
                {item.href ? (
                  <a href={item.href}>{item.value}</a>
                ) : (
                  <b>{item.value}</b>
                )}
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section split-section dark-check-section" aria-labelledby="best-way-title">
          <div className="section-heading">
            <p className="eyebrow">Рекомендация</p>
            <h2 id="best-way-title">Как лучше отправить заявку</h2>
            <p>
              Самый быстрый вариант - прислать фотографии, место объекта и несколько строк о задаче.
              Этого достаточно для первичного разговора и уточняющих вопросов.
            </p>
          </div>
          <ul className="check-list">
            <li>общий вид дома, крыши или места под кухню</li>
            <li>фото проблемных мест крупнее</li>
            <li>город, район или примерная геолокация</li>
            <li>что хотите получить в итоге</li>
            <li>когда хотели бы начать, если срок уже важен</li>
          </ul>
        </section>

        <section className="section contact-section" aria-labelledby="contact-form-title">
          <div className="contact-copy">
            <p className="eyebrow">Форма</p>
            <h2 id="contact-form-title">{formContent.title}</h2>
            <p>{formContent.text}</p>
            <ContactLinks contacts={contactConfig} />
          </div>
          <InquiryForm content={formContent} />
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <strong>Atelier Sweet Home</strong>
          <span>Связь по объектам в Грузии</span>
          <span>Тбилиси · Кахетия · Грузия</span>
        </div>
        <div className="footer-meta">
          <span>RU / EN / GE</span>
          <span>© 2026 Atelier Sweet Home</span>
        </div>
      </footer>
    </>
  );
}
