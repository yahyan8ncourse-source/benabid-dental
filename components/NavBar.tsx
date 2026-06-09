"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { FaTiktok, FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import Logo from "./Logo";
import { site } from "@/lib/site";

const menu = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "/a-propos" },
  { name: "Services", href: "/services" },
  { name: "Galerie", href: "/galerie" },
  { name: "Contact", href: "/contact" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";
  // Inner pages open with a dark hero header → use light text until scrolled.
  const lightText = !scrolled && !isHome;

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_8px_30px_-12px_rgba(0,0,0,0.18)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container-px mx-auto flex max-w-7xl items-center justify-between py-3.5">
        <Link href="/" aria-label="Accueil">
          <Logo variant={lightText ? "light" : "dark"} />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {menu.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    active
                      ? lightText
                        ? "text-white"
                        : "text-brand-700"
                      : lightText
                        ? "text-white/85 hover:text-white"
                        : "text-ink-soft hover:text-brand-600"
                  }`}
                >
                  {item.name}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-gradient"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${site.phoneIntl}`}
            className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
              lightText ? "text-white/90 hover:text-white" : "text-ink-soft hover:text-brand-600"
            }`}
          >
            <Phone className="h-4 w-4" />
            {site.phoneDisplay}
          </a>
          <Link href="/contact" className="btn-primary">
            Prendre rendez-vous
          </Link>
        </div>

        <button
          aria-label="Ouvrir le menu"
          onClick={() => setOpen(true)}
          className={`rounded-full p-2 lg:hidden ${lightText ? "text-white" : "text-brand-700"}`}
        >
          <Menu className="h-7 w-7" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed right-0 top-0 z-50 flex h-full w-[82%] max-w-sm flex-col bg-white p-6 shadow-2xl lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 360, damping: 38 }}
            >
              <div className="flex items-center justify-between">
                <Logo />
                <button
                  aria-label="Fermer le menu"
                  onClick={() => setOpen(false)}
                  className="rounded-full p-2 text-ink-soft hover:text-brand-600"
                >
                  <X className="h-7 w-7" />
                </button>
              </div>

              <ul className="mt-8 flex flex-col gap-1">
                {menu.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block rounded-xl px-4 py-3 text-lg font-semibold text-ink hover:bg-brand-50 hover:text-brand-700"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="btn-primary mt-6 w-full">
                Prendre rendez-vous
              </Link>
              <a
                href={`tel:${site.phoneIntl}`}
                className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-ink-soft"
              >
                <Phone className="h-4 w-4" /> {site.phoneDisplay}
              </a>

              <div className="mt-auto flex justify-center gap-4 pt-8">
                <a href={site.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="grid h-10 w-10 place-items-center rounded-full bg-brand-50 text-brand-700 hover:bg-brand-gradient hover:text-white">
                  <FaTiktok />
                </a>
                <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full bg-brand-50 text-brand-700 hover:bg-brand-gradient hover:text-white">
                  <FaInstagram />
                </a>
                <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full bg-brand-50 text-brand-700 hover:bg-brand-gradient hover:text-white">
                  <FaFacebookF />
                </a>
                <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="grid h-10 w-10 place-items-center rounded-full bg-brand-50 text-brand-700 hover:bg-brand-gradient hover:text-white">
                  <FaWhatsapp />
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
