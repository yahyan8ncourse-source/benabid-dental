import type { Metadata } from "next";
import Image from "next/image";
import { Check, Quote, Sparkles, HeartHandshake, ShieldCheck } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import StatsBand from "@/components/sections/StatsBand";
import ContactSection from "@/components/sections/ContactSection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "À propos",
  description: `Découvrez ${site.dentist}, ${site.role} à Alger Centre, et la philosophie de soins du Cabinet Dentaire Dr Benabid.`,
};

const values = [
  {
    icon: HeartHandshake,
    title: "Bienveillance",
    text: "Une écoute attentive et une prise en charge humaine, sans jugement ni stress.",
  },
  {
    icon: Sparkles,
    title: "Excellence esthétique",
    text: "Le souci du détail pour des sourires naturels, harmonieux et durables.",
  },
  {
    icon: ShieldCheck,
    title: "Sécurité & hygiène",
    text: "Des protocoles de stérilisation stricts pour votre tranquillité à chaque visite.",
  },
];

const points = [
  "Formation continue aux techniques dentaires les plus récentes",
  "Approche personnalisée pour chaque patient",
  "Matériaux de haute qualité (zircone, céramique premium)",
  "Transparence totale sur les soins et les tarifs",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="À propos"
        title="Une dentiste passionnée à Alger"
        subtitle={`${site.dentist}, ${site.role}, met son savoir-faire au service de votre sourire et de votre santé bucco-dentaire.`}
        breadcrumb="À propos"
      />

      <section className="section">
        <div className="container-px mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-card ring-1 ring-black/5">
              <Image
                src="/images/treatment-room.png"
                alt="Salle de soins du Cabinet Dentaire Dr Benabid"
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="eyebrow">Notre histoire</span>
            <h2 className="heading mt-3 text-3xl sm:text-4xl">
              Le sourire, <span className="gradient-text">une affaire de confiance</span>
            </h2>
            <p className="mt-5 text-ink-soft">
              Installée Rue Didouche Mourad, au cœur d&apos;Alger, {site.dentist} a
              fondé son cabinet avec une conviction simple : chaque patient mérite
              des soins d&apos;excellence dans un environnement chaleureux et
              rassurant.
            </p>
            <p className="mt-4 text-ink-soft">
              Spécialisée en dentisterie esthétique et restauratrice — facettes,
              prothèses zircone, blanchiment, implants — elle conjugue rigueur
              médicale et sens du détail pour révéler des sourires naturels et
              éclatants.
            </p>

            <ul className="mt-7 space-y-3.5">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-gradient text-white">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm text-ink-soft">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section bg-gradient-to-b from-brand-50/40 to-white pt-0">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Nos valeurs</span>
            <h2 className="heading mt-3 text-3xl sm:text-4xl">
              Ce qui nous <span className="gradient-text">guide</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="card h-full p-7 text-center">
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-gradient text-white shadow-soft">
                    <v.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-ink">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <figure className="mx-auto mt-16 max-w-3xl rounded-[2rem] bg-ink p-10 text-center text-white">
              <Quote className="mx-auto h-10 w-10 text-brand-400" />
              <blockquote className="mt-5 font-display text-xl leading-relaxed sm:text-2xl">
                « Un beau sourire, c&apos;est avant tout un sourire en bonne santé.
                Mon objectif est que chaque patient reparte confiant, soulagé et
                fier de son sourire. »
              </blockquote>
              <figcaption className="mt-6 text-sm font-semibold text-brand-300">
                — {site.dentist}, {site.role}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <StatsBand />
      <ContactSection />
    </>
  );
}
