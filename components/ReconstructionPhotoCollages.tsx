import Image from "next/image";

type HeroCollageProps = {
  houseAlt: string;
  interiorAlt: string;
  verandaAlt: string;
};

type InteriorCollageProps = {
  verandaAlt: string;
  plantsAlt: string;
  buffetAlt: string;
};

export function ReconstructionHeroCollage({ houseAlt, interiorAlt, verandaAlt }: HeroCollageProps) {
  return (
    <div className="reconstruction-hero-collage" aria-label={houseAlt}>
      <figure className="reconstruction-collage-photo reconstruction-collage-photo--house">
        <Image src="/images/reconstruction/hero/house-t-restored-clean.png" alt={houseAlt} width={1320} height={980} priority sizes="(max-width: 900px) 100vw, 48vw" />
      </figure>
      <figure className="reconstruction-collage-photo">
        <Image src="/images/reconstruction/projects/house-t/house-t-buffet-and-table.jpg" alt={interiorAlt} width={768} height={1024} sizes="(max-width: 900px) 50vw, 24vw" />
      </figure>
      <figure className="reconstruction-collage-photo">
        <Image src="/images/reconstruction/projects/house-t/house-t-veranda-wide.jpg" alt={verandaAlt} width={1280} height={960} sizes="(max-width: 900px) 50vw, 24vw" />
      </figure>
    </div>
  );
}

export function ReconstructionInteriorCollage({ verandaAlt, plantsAlt, buffetAlt }: InteriorCollageProps) {
  return (
    <div className="reconstruction-interior-collage">
      <figure className="reconstruction-collage-photo">
        <Image src="/images/reconstruction/projects/house-t/house-t-veranda-red-wall.jpg" alt={verandaAlt} width={960} height={1280} sizes="(max-width: 900px) 100vw, 37vw" />
      </figure>
      <div className="reconstruction-interior-collage__right">
        <figure className="reconstruction-collage-photo">
          <Image src="/images/reconstruction/projects/house-t/house-t-room-plants.jpg" alt={plantsAlt} width={768} height={1024} sizes="(max-width: 900px) 50vw, 32vw" />
        </figure>
        <figure className="reconstruction-collage-photo">
          <Image src="/images/reconstruction/projects/house-t/house-t-buffet-and-dog.jpg" alt={buffetAlt} width={768} height={1280} sizes="(max-width: 900px) 50vw, 32vw" />
        </figure>
      </div>
    </div>
  );
}
