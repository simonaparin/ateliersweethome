import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { ContactLinks } from "@/components/ContactLinks";
import { InquiryForm } from "@/components/InquiryForm";
import { contactConfig } from "@/data/contacts";
import type { FormContent } from "@/types/content";

const copy = {
  en: {
    eyebrow: "Contact", title: "Show us the property and briefly describe the task", text: "Send photos of the house, roof or site and tell us what you would like to do.", write: "Contact us", channels: "How to contact us", recommendation: "What to include in a request", formLabel: "Request form",
    rows: [
      ["Phone", "+995555128231", "Call or send a message to start with a short conversation.", "tel:+995555128231"],
      ["WhatsApp", "Open WhatsApp", "Convenient for photographs, location and a short voice message.", "https://wa.me/995555128231"],
      ["Email", "ai769598@gmail.com", "For a detailed description, files and unhurried correspondence.", "mailto:ai769598@gmail.com"],
      ["Request form", "Describe the task", "Add photographs, location and a short description. The request is delivered directly to our team.", "#contact-form"]
    ],
    form: { title: "Describe the task", text: "Add photographs, the property location and a few words about the work you need.", fields: { name: "Name", contact: "Phone, WhatsApp, Telegram or email", location: "Property location", task: "What would you like to do?", start: "Preferred start date, optional", budget: "Budget range, optional", photos: "Photographs, up to 10 files" }, budgetHint: "It helps us understand the scale of the project.", submit: "Send the request", localMode: "", success: "Thank you. Your request has been received.", notSent: "" }
  },
  ge: {
    eyebrow: "კონტაქტი", title: "გვაჩვენეთ ობიექტი და მოკლედ აღწერეთ ამოცანა", text: "გამოგვიგზავნეთ სახლის, სახურავის ან ნაკვეთის ფოტოები და გვიამბეთ, რისი გაკეთება გსურთ.", write: "მოგვწერეთ", channels: "როგორ დაგვიკავშირდეთ", recommendation: "რა უნდა დაურთოთ განაცხადს", formLabel: "განაცხადის ფორმა",
    rows: [
      ["ტელეფონი", "+995555128231", "დაგვირეკეთ ან მოგვწერეთ მოკლე საუბრის დასაწყებად.", "tel:+995555128231"],
      ["WhatsApp", "WhatsApp-ის გახსნა", "მოსახერხებელია ფოტოებისთვის, მისამართისა და მოკლე ხმოვანი შეტყობინებისთვის.", "https://wa.me/995555128231"],
      ["ელფოსტა", "ai769598@gmail.com", "დეტალური აღწერის, ფაილებისა და მშვიდი მიმოწერისთვის.", "mailto:ai769598@gmail.com"],
      ["განაცხადის ფორმა", "ამოცანის აღწერა", "დაამატეთ ფოტოები, მდებარეობა და მოკლე აღწერა. განაცხადი პირდაპირ გუნდს გადაეცემა.", "#contact-form"]
    ],
    form: { title: "აღწერეთ ამოცანა", text: "დაამატეთ ფოტოები, ობიექტის მდებარეობა და რამდენიმე სიტყვა თქვენთვის საჭირო სამუშაოს შესახებ.", fields: { name: "სახელი", contact: "ტელეფონი, WhatsApp, Telegram ან ელფოსტა", location: "ობიექტის მდებარეობა", task: "რისი გაკეთება გსურთ?", start: "სასურველი დაწყების თარიღი, სურვილისამებრ", budget: "ბიუჯეტის დიაპაზონი, სურვილისამებრ", photos: "ფოტოები, მაქსიმუმ 10 ფაილი" }, budgetHint: "ეს გვეხმარება პროექტის მასშტაბის გაგებაში.", submit: "განაცხადის გაგზავნა", localMode: "", success: "გმადლობთ. თქვენი განაცხადი მიღებულია.", notSent: "" }
  }
} as const;

export function generateStaticParams() { return [{ locale: "en" }, { locale: "ge" }]; }

export async function generateMetadata({ params }: { params: Promise<{ locale: "en" | "ge" }> }): Promise<Metadata> {
  const { locale } = await params;
  const c = copy[locale];
  return { title: `${c.title} | Atelier Sweet Home`, description: c.text, alternates: { canonical: `/${locale}/contacts`, languages: { ru: "/contacts", en: "/en/contacts", ka: "/ge/contacts" } } };
}

export default async function LocalContacts({ params }: { params: Promise<{ locale: "en" | "ge" }> }) {
  const { locale } = await params;
  const c = copy[locale];
  if (!c) notFound();
  return <>
    <Header locale={locale} activePath="/contacts" contacts={contactConfig} content={{ brand: "Atelier Sweet Home", writeLabel: c.write }} />
    <main>
      <section className="contacts-hero" aria-labelledby="contacts-title"><div><p className="eyebrow">{c.eyebrow}</p><h1 id="contacts-title">{c.title}</h1></div><p className="hero-text">{c.text}</p></section>
      <section className="section contact-options-section" aria-labelledby="channels-title"><div className="section-heading"><p className="eyebrow">{c.eyebrow}</p><h2 id="channels-title">{c.channels}</h2></div><div className="contact-option-grid">{c.rows.map(([title, value, text, href]) => <article key={title}><span>{title}</span><a href={href}>{value}</a><p>{text}</p></article>)}</div></section>
      <section className="section split-section dark-check-section"><div className="section-heading"><p className="eyebrow">{c.formLabel}</p><h2>{c.recommendation}</h2><p>{c.form.text}</p></div><ul className="check-list"><li>{c.form.fields.photos}</li><li>{c.form.fields.location}</li><li>{c.form.fields.task}</li><li>{c.form.fields.contact}</li></ul></section>
      <section className="section contact-section"><div className="contact-copy"><p className="eyebrow">{c.formLabel}</p><h2>{c.form.title}</h2><p>{c.form.text}</p><ContactLinks contacts={contactConfig} /></div><InquiryForm content={c.form as FormContent} /></section>
    </main>
  </>;
}
