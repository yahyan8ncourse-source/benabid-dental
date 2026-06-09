"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Phone, ArrowUp } from "lucide-react";
import { site } from "@/lib/site";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const waMessage = encodeURIComponent(
    `Bonjour, je souhaite prendre rendez-vous au ${site.name}.`
  );

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-center gap-3">
      {showTop && (
        <button
          aria-label="Remonter en haut"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="grid h-11 w-11 place-items-center rounded-full bg-white text-brand-700 shadow-card ring-1 ring-black/5 transition-transform hover:-translate-y-0.5"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
      <a
        href={`tel:${site.phoneIntl}`}
        aria-label="Appeler le cabinet"
        className="grid h-12 w-12 place-items-center rounded-full bg-brand-gradient text-white shadow-soft transition-transform hover:scale-105 lg:hidden"
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href={`https://wa.me/${site.whatsapp}?text=${waMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter sur WhatsApp"
        className="group grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.6)] transition-transform hover:scale-105"
      >
        <FaWhatsapp className="h-7 w-7" />
        <span className="absolute right-16 hidden whitespace-nowrap rounded-full bg-ink px-3 py-1.5 text-xs font-semibold text-white shadow-lg group-hover:block">
          Réservez sur WhatsApp
        </span>
      </a>
    </div>
  );
}
