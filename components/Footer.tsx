import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaTiktok, FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import Logo from "./Logo";
import { site, services } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white/80">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-gradient opacity-20 blur-3xl" />
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">
              {site.slogan}. Des soins dentaires d&apos;excellence au cœur d&apos;Alger,
              dans un cadre moderne et chaleureux.
            </p>
            <div className="mt-6 flex gap-3">
              <a href={site.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition-colors hover:bg-brand-gradient">
                <FaTiktok />
              </a>
              <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition-colors hover:bg-brand-gradient">
                <FaInstagram />
              </a>
              <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition-colors hover:bg-brand-gradient">
                <FaFacebookF />
              </a>
              <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition-colors hover:bg-brand-gradient">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 font-display text-base font-bold text-white">Navigation</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-white">Accueil</Link></li>
              <li><Link href="/a-propos" className="hover:text-white">À propos</Link></li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/galerie" className="hover:text-white">Galerie</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-display text-base font-bold text-white">Nos soins</h3>
            <ul className="space-y-3 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services#${s.slug}`} className="hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-display text-base font-bold text-white">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
                <span>{site.address.full}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
                <a href={`tel:${site.phoneIntl}`} className="hover:text-white">{site.phoneDisplay}</a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
                <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
                <span>Sam – Jeu : 09:00 – 18:00<br />Vendredi : Fermé</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-xs text-white/50 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} {site.name}. Tous droits réservés.</p>
          <p>
            {site.dentist} — {site.role} · Alger, Algérie
          </p>
        </div>
      </div>
    </footer>
  );
}
