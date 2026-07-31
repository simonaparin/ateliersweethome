import Image from "next/image";
import type { ProjectCase } from "@/data/projects";

type ProjectCasesProps = {
  eyebrow?: string;
  title: string;
  emptyText: string;
  cases: ProjectCase[];
};

export function ProjectCases({ eyebrow = "Доказательства", title, emptyText, cases }: ProjectCasesProps) {
  if (cases.length === 0) {
    return (
      <section className="section muted-section" aria-labelledby="cases-title">
        <div className="section-heading">
        <p className="eyebrow">{eyebrow}</p>
          <h2 id="cases-title">{title}</h2>
        </div>
        <p className="empty-cases">{emptyText}</p>
      </section>
    );
  }

  return (
    <section className="section" aria-labelledby="cases-title">
      <div className="section-heading">
          <p className="eyebrow">{eyebrow}</p>
        <h2 id="cases-title">{title}</h2>
      </div>
      <div className="case-list">
        {cases.map((project) => (
          <article className="project-case" key={`${project.title}-${project.location}`}>
            <div>
              <h3>{project.title}</h3>
              <p className="case-location">{project.location}</p>
              <p>{project.situation}</p>
              <ul>
                {project.workCompleted.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="case-role">{project.role}</p>
            </div>
            <div className="case-images">
              {project.images.map((image) => (
                <figure key={image.src}>
                  <Image src={image.src} alt={image.alt} width={640} height={480} sizes="(max-width: 700px) 100vw, 33vw" />
                  {image.caption ? <figcaption>{image.caption}</figcaption> : null}
                </figure>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
