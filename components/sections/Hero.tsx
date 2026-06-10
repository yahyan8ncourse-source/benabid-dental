"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, MapPin, Phone, ArrowRight, Stethoscope, Sparkles } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { site } from "@/lib/site";

export default function Hero() {
  const waMessage = encodeURIComponent(
    `Bonjour, je souhaite prendre rendez-vous au ${site.name}.`
  );

  return (
    <section className="relative isolate overflow-hidden bg-white pt-28 sm:pt-32 lg:bg-gradient-to-b lg:from-brand-50/70 lg:via-white lg:to-white lg:pt-40">
      {/* Decorative blobs — desktop only so they don't wash out mobile text */}
      <div className="pointer-events-none absolute -left-24 top-24 hidden h-72 w-72 rounded-full bg-brand-200/40 blur-3xl lg:block" />
      <div className="pointer-events-none absolute right-0 top-0 hidden h-96 w-96 rounded-full bg-brand-100/50 blur-3xl lg:block" />

      <div className="container-px relative z-10 mx-auto grid max-w-7xl items-center gap-12 pb-16 lg:grid-cols-2 lg:gap-8 lg:pb-24">
        <motion.div
          className="rounded-3xl bg-white p-6 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.04] sm:p-8 sm:shadow-none sm:ring-0 lg:bg-transparent lg:p-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow text-brand-700">
            <Stethoscope className="h-4 w-4 shrink-0" /> {site.dentist} · {site.role}
          </span>
          <h1 className="heading mt-4 text-4xl text-ink sm:text-5xl lg:text-6xl">
            Votre sourire,
            <br />
            <span className="text-brand-700 sm:gradient-text">notre passion.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink sm:text-lg lg:text-ink-soft">
            Au cœur d&apos;Alger, le Cabinet Dentaire Dr Benabid vous offre des
            soins dentaires modernes et personnalisés : esthétique, facettes,
            prothèses zircone, implants et bien plus — dans un cadre doux et
            rassurant.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/contact" className="btn-primary">
              Prendre rendez-vous <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`https://wa.me/${site.whatsapp}?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <FaWhatsapp className="h-5 w-5 text-[#25D366]" /> WhatsApp
            </a>
          </div>

          <div className="mt-9 flex flex-col gap-3 text-sm sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-4">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand-500 text-brand-500" />
                ))}
              </div>
              <span className="font-semibold text-ink">Patients satisfaits</span>
            </div>
            <a
              href={site.map.placeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-ink hover:text-brand-600 sm:text-ink-soft"
            >
              <MapPin className="h-4 w-4 shrink-0 text-brand-600" /> Alger Centre · Didouche Mourad
            </a>
            <a
              href={`tel:${site.phoneIntl}`}
              className="flex items-center gap-2 text-ink hover:text-brand-600 sm:text-ink-soft"
            >
              <Phone className="h-4 w-4 shrink-0 text-brand-600" /> {site.phoneDisplay}
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] shadow-card ring-1 ring-black/5 lg:max-w-lg">
            <Image
              src="/images/smile.png"
              alt="Sourire éclatant — Cabinet Dentaire Dr Benabid"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/30 via-transparent to-transparent" />
          </div>

          {/* floating cards */}
          <motion.div
            className="absolute -left-3 top-10 hidden rounded-2xl bg-white/95 p-4 shadow-card ring-1 ring-black/5 backdrop-blur sm:block"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text-2xl font-extrabold text-brand-600">+10</p>
            <p className="text-xs font-medium text-ink-muted">ans d&apos;expérience</p>
          </motion.div>

          <motion.div
            className="absolute -bottom-4 right-2 hidden items-center gap-3 rounded-2xl bg-white/95 p-4 shadow-card ring-1 ring-black/5 backdrop-blur sm:flex"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-gradient text-white">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-ink">Esthétique du sourire</p>
              <p className="text-xs text-ink-muted">Facettes · Blanchiment</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
