"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/site";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[index];

  return (
    <section className="section bg-gradient-to-b from-brand-50/40 to-white">
      <div className="container-px mx-auto max-w-4xl text-center">
        <span className="eyebrow">Témoignages</span>
        <h2 className="heading mt-3 text-3xl sm:text-4xl lg:text-5xl">
          Ils nous font <span className="gradient-text">confiance</span>
        </h2>

        <div className="relative mt-12 min-h-[260px]">
          <Quote className="mx-auto h-12 w-12 text-brand-200" />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45 }}
              className="mx-auto mt-6 max-w-2xl"
            >
              <p className="font-display text-xl leading-relaxed text-ink sm:text-2xl">
                “{t.text}”
              </p>
              <div className="mt-6 flex flex-col items-center gap-2">
                <div className="flex">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-brand-500 text-brand-500" />
                  ))}
                </div>
                <span className="font-semibold text-brand-700">— {t.name}</span>
              </div>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            aria-label="Témoignage précédent"
            onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
            className="grid h-11 w-11 place-items-center rounded-full border border-brand-200 text-brand-600 transition-colors hover:bg-brand-gradient hover:text-white hover:border-transparent"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Aller au témoignage ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === index ? "w-7 bg-brand-gradient" : "w-2.5 bg-brand-200"
                }`}
              />
            ))}
          </div>
          <button
            aria-label="Témoignage suivant"
            onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
            className="grid h-11 w-11 place-items-center rounded-full border border-brand-200 text-brand-600 transition-colors hover:bg-brand-gradient hover:text-white hover:border-transparent"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
