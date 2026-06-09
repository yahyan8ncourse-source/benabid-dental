import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const shots = [
  { src: "/images/smile.png", alt: "Sourire éclatant", span: "row-span-2" },
  { src: "/images/treatment-room.png", alt: "Salle de soins moderne", span: "" },
  { src: "/images/hero-clinic.png", alt: "Accueil du cabinet", span: "" },
];

export default function GalleryPreview() {
  return (
    <section className="section">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="flex flex-col items-end justify-between gap-6 sm:flex-row">
          <div className="max-w-xl">
            <span className="eyebrow">Galerie</span>
            <h2 className="heading mt-3 text-3xl sm:text-4xl lg:text-5xl">
              Un cabinet pensé pour <span className="gradient-text">votre confort</span>
            </h2>
            <p className="mt-4 text-ink-soft">
              Découvrez notre cadre moderne, lumineux et chaleureux, conçu pour des
              soins en toute sérénité.
            </p>
          </div>
          <Link href="/galerie" className="btn-outline shrink-0">
            Voir la galerie <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 grid auto-rows-[200px] grid-cols-2 gap-4 sm:auto-rows-[240px] lg:grid-cols-3">
            {shots.map((s) => (
              <div
                key={s.src}
                className={`group relative overflow-hidden rounded-3xl shadow-card ring-1 ring-black/5 ${s.span}`}
              >
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="absolute bottom-4 left-4 translate-y-2 text-sm font-semibold text-white opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  {s.alt}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
