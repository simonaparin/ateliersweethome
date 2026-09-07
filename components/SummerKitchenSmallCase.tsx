import Image from "next/image";
import {
  summerKitchenSmallCase,
  type SummerKitchenSmallCaseLocale
} from "@/data/summerKitchenSmallCase";

export function SummerKitchenSmallCase({ locale }: { locale: SummerKitchenSmallCaseLocale }) {
  const content = summerKitchenSmallCase[locale];

  return (
    <section className="section kitchen-gallery-section small-kitchen-case" aria-labelledby={`small-kitchen-title-${locale}`}>
      <div className="section-heading">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2 id={`small-kitchen-title-${locale}`}>{content.title}</h2>
        <p>{content.text}</p>
      </div>
      <div className="small-kitchen-gallery">
        {content.images.map((image) => (
          <figure className={image.className} key={image.src}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(max-width: 760px) 100vw, 50vw"
            />
            <figcaption>{image.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
