import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { services } from "@/lib/site";

export default function ServicesSection({ full = false }: { full?: boolean }) {
  const list = full ? services : services.slice(0, 6);

  return (
    <section id="services" className="section bg-gradient-to-b from-white to-brand-50/40">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Nos prestations</span>
          <h2 className="heading mt-3 text-3xl sm:text-4xl lg:text-5xl">
            Des soins complets pour <span className="gradient-text">toute la famille</span>
          </h2>
          <p className="mt-4 text-ink-soft">
            De l&apos;esthétique du sourire aux soins essentiels, nous prenons soin
            de votre santé bucco-dentaire avec expertise et bienveillance.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <article
                id={s.slug}
                className="group card h-full scroll-mt-28 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft"
              >
                <div className="flex items-center justify-between">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-gradient text-white shadow-soft">
                    <Icon name={s.icon} className="h-7 w-7" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-brand-300 transition-colors group-hover:text-brand-600" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.highlights.map((h) => (
                    <li
                      key={h}
                      className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        {!full && (
          <div className="mt-12 text-center">
            <Link href="/services" className="btn-outline">
              Voir tous nos services
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
