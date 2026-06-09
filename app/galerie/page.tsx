import type { Metadata } from "next";
import Image from "next/image";
import { FaTiktok } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import ContactSection from "@/components/sections/ContactSection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Découvrez le cadre du Cabinet Dentaire Dr Benabid à Alger et suivez nos réalisations sur TikTok @benabiddental.",
};

const gallery = [
  { src: "/images/hero-clinic.png", alt: "Accueil et réception du cabinet", span: "sm:col-span-2 sm:row-span-2" },
  { src: "/images/smile.png", alt: "Sourire éclatant après soins esthétiques", span: "" },
  { src: "/images/treatment-room.png", alt: "Salle de soins équipée et moderne", span: "" },
  { src: "/images/smile.png", alt: "Résultat esthétique naturel", span: "" },
  { src: "/images/treatment-room.png", alt: "Environnement calme et lumineux", span: "" },
];

export default function GaleriePage() {
  return (
    <>
      <PageHeader
        eyebrow="Galerie"
        title="Notre cabinet en images"
        subtitle="Un environnement moderne, lumineux et chaleureux, pensé pour votre confort et votre sérénité."
        breadcrumb="Galerie"
      />

      <section className="section">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal>
            <div className="grid auto-rows-[220px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {gallery.map((g, i) => (
                <div
                  key={i}
                  className={`group relative overflow-hidden rounded-3xl shadow-card ring-1 ring-black/5 ${g.span}`}
                >
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <span className="absolute bottom-4 left-4 max-w-[80%] translate-y-2 text-sm font-semibold text-white opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    {g.alt}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <a
              href={site.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 flex flex-col items-center justify-between gap-6 overflow-hidden rounded-[2rem] bg-ink p-8 text-white sm:flex-row sm:p-10"
            >
              <div className="flex items-center gap-5">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-brand-gradient text-white shadow-soft">
                  <FaTiktok className="h-8 w-8" />
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold">Suivez-nous sur TikTok</h3>
                  <p className="mt-1 text-white/70">
                    Découvrez nos cas, conseils et coulisses sur {site.social.tiktokHandle}
                  </p>
                </div>
              </div>
              <span className="btn bg-white text-brand-700 transition-transform group-hover:-translate-y-0.5">
                Voir le profil <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          </Reveal>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
