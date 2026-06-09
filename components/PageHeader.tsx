import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { LogoMark } from "./Logo";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumb?: string;
};

export default function PageHeader({ eyebrow, title, subtitle, breadcrumb }: Props) {
  return (
    <section className="relative overflow-hidden bg-ink pt-32 pb-16 text-white sm:pt-36 sm:pb-20">
      <div className="pointer-events-none absolute -right-20 -top-10 opacity-10">
        <LogoMark className="h-72 w-72" />
      </div>
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-brand-gradient opacity-25 blur-3xl" />
      <div className="container-px relative mx-auto max-w-7xl">
        <nav className="mb-4 flex items-center gap-1.5 text-sm text-white/60">
          <Link href="/" className="hover:text-white">Accueil</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-brand-300">{breadcrumb ?? title}</span>
        </nav>
        {eyebrow && (
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-white/70">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
