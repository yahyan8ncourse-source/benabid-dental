import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { reasons } from "@/lib/site";

export default function WhyChooseUs() {
  return (
    <section className="section bg-ink text-white">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-brand-300">
            Pourquoi nous choisir
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            L&apos;excellence dentaire,
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-brand-300 to-brand-500">
              en toute confiance
            </span>
          </h2>
          <p className="mt-4 text-white/70">
            Des raisons concrètes de confier votre sourire au Cabinet Dentaire Dr Benabid.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.05}>
              <div className="group h-full rounded-3xl border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:border-brand-400/40 hover:bg-white/[0.08]">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-gradient text-white shadow-soft">
                  <Icon name={r.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-white">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
