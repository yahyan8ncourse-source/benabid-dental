import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { site } from "@/lib/site";

const stats = [
  { value: "+10", label: "ans d'expérience" },
  { value: "+5 000", label: "sourires soignés" },
  { value: "9", label: "spécialités proposées" },
  { value: "6j/7", label: "à votre service" },
];

export default function StatsBand() {
  const waMessage = encodeURIComponent(
    `Bonjour, je souhaite prendre rendez-vous au ${site.name}.`
  );

  return (
    <section className="relative overflow-hidden bg-brand-gradient">
      <div className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(circle_at_20%_20%,white,transparent_40%),radial-gradient(circle_at_80%_80%,white,transparent_40%)]" />
      <div className="container-px relative mx-auto max-w-7xl py-16 text-white">
        <div className="grid gap-8 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl font-extrabold sm:text-5xl">{s.value}</p>
              <p className="mt-1 text-sm text-white/85">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl bg-white/10 p-8 text-center backdrop-blur sm:flex-row sm:text-left">
          <div>
            <h3 className="font-display text-2xl font-bold sm:text-3xl">
              Prêt(e) à retrouver le sourire ?
            </h3>
            <p className="mt-2 text-white/85">
              Réservez votre consultation dès aujourd&apos;hui — c&apos;est simple et rapide.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="btn bg-white text-brand-700 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Rendez-vous <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`https://wa.me/${site.whatsapp}?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <FaWhatsapp className="h-5 w-5" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
