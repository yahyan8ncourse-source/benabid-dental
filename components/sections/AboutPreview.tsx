import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

const points = [
  "Diagnostic précis et plan de traitement personnalisé",
  "Technologies modernes pour des soins confortables",
  "Écoute, pédagogie et transparence des tarifs",
  "Un suivi attentif avant, pendant et après vos soins",
];

export default function AboutPreview() {
  return (
    <section className="section">
      <div className="container-px mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-card ring-1 ring-black/5">
            <Image
              src="/images/hero-clinic.png"
              alt="Cabinet Dentaire Dr Benabid à Alger Centre"
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 hidden rounded-2xl bg-brand-gradient p-6 text-white shadow-soft sm:block">
            <p className="font-display text-3xl font-extrabold">100%</p>
            <p className="text-sm text-white/90">Sourires soignés<br />avec passion</p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="order-1 lg:order-2">
          <span className="eyebrow">À propos du cabinet</span>
          <h2 className="heading mt-3 text-3xl sm:text-4xl lg:text-5xl">
            {site.dentist},
            <br />
            <span className="gradient-text">votre dentiste à Alger</span>
          </h2>
          <p className="mt-5 text-ink-soft">
            Passionnée par la dentisterie esthétique et le bien-être de ses
            patients, {site.dentist} vous accueille dans un cabinet moderne situé
            Rue Didouche Mourad. Chaque traitement est pensé pour allier santé,
            confort et beauté naturelle de votre sourire.
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

          <Link href="/a-propos" className="btn-primary mt-8">
            En savoir plus <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
