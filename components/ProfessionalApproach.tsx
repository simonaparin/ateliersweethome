import type { ProfessionalApproachContent } from "@/data/professionalApproach";

export function ProfessionalApproach({ content }: { content: ProfessionalApproachContent }) {
  return <section className="section split-section" aria-labelledby="professional-approach-title">
    <div className="section-heading">
      <p className="eyebrow">{content.eyebrow}</p>
      <h2 id="professional-approach-title">{content.title}</h2>
      <p>{content.text}</p>
    </div>
    <div>
      <ul className="scope-list">{content.details.map((item) => <li key={item}>{item}</li>)}</ul>
      <p className="note">{content.note}</p>
    </div>
  </section>;
}
