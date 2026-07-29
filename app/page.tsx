import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { ContactLinks } from "@/components/ContactLinks";
import { contactConfig } from "@/data/contacts";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Atelier Sweet Home | Реконструкция, крыши и летние кухни в Грузии",
  description: "Небольшая мастерская для старых домов, крыш, летних кухонь и навесов в Тбилиси, Кахетии и других регионах Грузии.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Atelier Sweet Home",
    description: "Реконструкция старых домов и летние кухни в Грузии.",
    url: "/",
    siteName: siteConfig.name,
    locale: "ru_GE",
    type: "website"
  }
};

const headerContent = {
  brand: "Atelier Sweet Home",
  writeLabel: "Написать"
};

const directions = [
  {
    title: "Реконструкция старых домов",
    text: "Оцениваем дом целиком: крыша, стены, дерево, планировка, тепло, вода и свет. Сохраняем характер и готовим дом к современной жизни.",
    href: "/reconstruction",
    image: {
      src: "/images/reconstruction/hero/old-house-stone-facade.jpg",
      alt: "Старый каменный дом с кирпичными деталями и деревянной верандой"
    }
  },
  {
    title: "Летние кухни и навесы",
    text: "Делаем место на участке: навес, свет, рабочая зона, металл, плитка, мойка, хранение и стол для людей.",
    href: "/summer-kitchen",
    image: {
      src: "/images/summer-kitchen/projects/summer-kitchen-canopy-work-zone.jpg",
      alt: "Летняя кухня под большим металлическим навесом со столом и рабочей зоной"
    }
  },
  {
    title: "Крыши старых домов",
    text: "Оцениваем стропильную систему, опоры, обрешетку, протечки и старое покрытие.",
    href: "/roof",
    image: {
      src: "/images/roof/projects/roof-after-new-profiled-sheet.jpg",
      alt: "Готовая крыша из профлиста на старом доме"
    }
  }
];

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    areaServed: ["Tbilisi", "Kakheti", "Georgia"],
    description: "Небольшая мастерская для реконструкции старых домов, крыш, летних кухонь и навесов в Грузии.",
    email: contactConfig.email || undefined
  };

  return (
    <>
      <JsonLd data={organizationSchema} />
      <Header content={headerContent} contacts={contactConfig} activePath="/" />

      <main>
        <section className="home-station" aria-labelledby="home-title">
          <div className="home-intro">
            <p className="eyebrow">Тбилиси · Кахетия · Грузия</p>
            <h1 id="home-title">Atelier Sweet Home</h1>
            <p className="hero-phrase">Старые дома, крыши, летние кухни и навесы с вниманием к конструкции, материалам и деталям.</p>
            <p className="hero-text">
              Выберите задачу, с которой пришли. Каждое направление открывается как отдельная страница с реальными фото, понятным первым шагом и текстом по конкретной услуге.
            </p>
          </div>

          <div className="home-direction-grid" aria-label="Направления">
            {directions.map((direction) => (
              <a className="home-direction" href={direction.href} key={direction.href}>
                <figure>
                  <Image
                    src={direction.image.src}
                    alt={direction.image.alt}
                    width={980}
                    height={760}
                    priority={direction.href === "/reconstruction"}
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />
                </figure>
                <span>{direction.title}</span>
                <p>{direction.text}</p>
              </a>
            ))}

          </div>
        </section>

        <section className="section home-note-section" id="contact-form" aria-labelledby="home-note-title">
          <div className="section-heading compact">
            <p className="eyebrow">Как начать</p>
            <h2 id="home-note-title">Первый шаг — показать объект</h2>
            <p>Присылайте фотографии дома, крыши или места под кухню. По фото можно понять характер задачи и решить, есть ли смысл договариваться о разговоре или осмотре.</p>
          </div>
          <ContactLinks contacts={contactConfig} />
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <strong>Atelier Sweet Home</strong>
          <span>Реконструкция · Летние кухни · Крыши</span>
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
