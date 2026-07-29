import type { DirectionLink } from "@/data/directions";

type RelatedDirectionsProps = {
  title: string;
  text: string;
  items: DirectionLink[];
};

export function RelatedDirections({ title, text, items }: RelatedDirectionsProps) {
  return (
    <section className="section related-directions" aria-labelledby="related-directions-title">
      <div className="related-directions-copy">
        <p className="eyebrow">Ещё направление</p>
        <h2 id="related-directions-title">{title}</h2>
        <p>{text}</p>
      </div>
      <div className="direction-list">
        {items.map((item) => {
          const content = (
            <>
              <span>{item.title}</span>
              <p>{item.text}</p>
              {item.status ? <b>{item.status}</b> : null}
            </>
          );

          return item.href ? (
            <a className="direction-row" href={item.href} key={item.title}>
              {content}
            </a>
          ) : (
            <div className="direction-row disabled" aria-disabled="true" key={item.title}>
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
}
