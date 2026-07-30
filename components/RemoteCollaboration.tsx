import Image from "next/image";
import type { RemoteCollaborationContent, RemoteKitchenCaseContent } from "@/data/remoteCollaboration";

export function RemoteCollaboration({ content }: { content: RemoteCollaborationContent }) {
  return <section className="section split-section" aria-labelledby="remote-collaboration-title">
    <div className="section-heading">
      <p className="eyebrow">{content.eyebrow}</p>
      <h2 id="remote-collaboration-title">{content.title}</h2>
      <p>{content.text}</p>
    </div>
    <div>
      <ul className="scope-list">{content.details.map((item) => <li key={item}>{item}</li>)}</ul>
      <p className="note">{content.note}</p>
    </div>
  </section>;
}

export function RemoteKitchenCase({ content }: { content: RemoteKitchenCaseContent }) {
  return <section className="section remote-kitchen-case" aria-labelledby="remote-kitchen-case-title">
    <div className="section-heading">
      <p className="eyebrow">{content.eyebrow}</p>
      <h2 id="remote-kitchen-case-title">{content.title}</h2>
      <p>{content.text}</p>
    </div>
    <div className="remote-kitchen-case-content">
      <h3>{content.referenceTitle}</h3>
      <p>{content.referenceText}</p>
      <div className="remote-kitchen-reference-grid">
        {content.references.map((image) => <figure key={image.src}>
          <Image src={image.src} alt={image.alt} width={900} height={680} sizes="(max-width: 760px) 100vw, 50vw" />
        </figure>)}
      </div>
      <ul className="scope-list">{content.details.map((item) => <li key={item}>{item}</li>)}</ul>
      <p className="note">{content.note}</p>
    </div>
  </section>;
}
