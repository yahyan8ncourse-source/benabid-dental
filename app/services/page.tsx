import type { Metadata } from "next";
import { MessageSquare, Search, ClipboardList, Smile } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import ServicesSection from "@/components/sections/ServicesSection";
import StatsBand from "@/components/sections/StatsBand";
import ContactSection from "@/components/sections/ContactSection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nos services",
  description:
    "Esthétique dentaire, facettes, blanchiment, prothèses zircone, implants, orthodontie, soins et endodontie au Cabinet Dentaire Dr Benabid à Alger Centre.",
};

const steps = [
  {
    icon: MessageSquare,
    title: "Prise de contact",
    text: "Vous réservez par WhatsApp, téléphone ou via le formulaire en ligne.",
  },
  {
    icon: Search,
    title: "Bilan & diagnostic",
    text: "Examen complet et écoute de vos attentes lors de la première consultation.",
  },
  {
    icon: ClipboardList,
    title: "Plan de traitement",
    text: "Un plan personnalisé et un devis clair, expliqués en toute transparence.",
  },
  {
    icon: Smile,
    title: "Soins & suivi",
    text: "Des soins confortables et un suivi attentif jusqu'au résultat final.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Nos prestations"
        title="Des soins dentaires complets"
        subtitle={`Du sourire esthétique aux soins essentiels, ${site.dentist} prend soin de toute la famille avec expertise et douceur.`}
        breadcrumb="Services"
      />

      <ServicesSection full />

      <section className="section pt-0">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Comment ça se passe</span>
            <h2 className="heading mt-3 text-3xl sm:text-4xl">
              Votre parcours, <span className="gradient-text">étape par étape</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="relative h-full rounded-3xl border border-black/5 bg-white p-7 shadow-card">
                  <span className="absolute right-6 top-5 font-display text-4xl font-extrabold text-brand-100">
                    0{i + 1}
                  </span>
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-gradient text-white shadow-soft">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <StatsBand />
      <ContactSection />
    </>
  );
}
