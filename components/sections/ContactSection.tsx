"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Check } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Reveal from "@/components/Reveal";
import { site, services } from "@/lib/site";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const update = (k: keyof typeof form, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `Bonjour Dr Benabid, je souhaite prendre rendez-vous.`,
      `*Nom* : ${form.name}`,
      `*Téléphone* : ${form.phone}`,
      form.service ? `*Soin souhaité* : ${form.service}` : "",
      form.date ? `*Date souhaitée* : ${form.date}` : "",
      form.message ? `*Message* : ${form.message}` : "",
    ].filter(Boolean);
    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${site.whatsapp}?text=${text}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="section">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Contact & Rendez-vous</span>
          <h2 className="heading mt-3 text-3xl sm:text-4xl lg:text-5xl">
            Prenez <span className="gradient-text">rendez-vous</span>
          </h2>
          <p className="mt-4 text-ink-soft">
            Remplissez le formulaire et envoyez votre demande directement sur
            WhatsApp, ou contactez-nous par téléphone. Nous vous répondrons au
            plus vite.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* Form */}
          <Reveal className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="card h-full p-7 sm:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Nom complet *">
                  <input
                    required
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Votre nom"
                    className="input"
                  />
                </Field>
                <Field label="Téléphone *">
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="0X XX XX XX XX"
                    className="input"
                  />
                </Field>
                <Field label="Soin souhaité">
                  <select
                    value={form.service}
                    onChange={(e) => update("service", e.target.value)}
                    className="input"
                  >
                    <option value="">Sélectionner…</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Consultation générale">Consultation générale</option>
                  </select>
                </Field>
                <Field label="Date souhaitée">
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => update("date", e.target.value)}
                    className="input"
                  />
                </Field>
              </div>
              <Field label="Message (optionnel)" className="mt-5">
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="Décrivez brièvement votre besoin…"
                  className="input resize-none"
                />
              </Field>

              <button type="submit" className="btn-primary mt-6 w-full">
                {sent ? (
                  <>
                    <Check className="h-5 w-5" /> Demande envoyée !
                  </>
                ) : (
                  <>
                    <FaWhatsapp className="h-5 w-5" /> Envoyer ma demande
                  </>
                )}
              </button>
              <p className="mt-3 text-center text-xs text-ink-muted">
                En cliquant, votre demande s&apos;ouvre dans WhatsApp, prête à être envoyée.
              </p>
            </form>
          </Reveal>

          {/* Info + map */}
          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="flex h-full flex-col gap-5">
              <div className="card p-7">
                <ul className="space-y-5">
                  <InfoRow icon={<MapPin className="h-5 w-5" />} title="Adresse">
                    <a
                      href={site.map.placeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand-600"
                    >
                      {site.address.full}
                    </a>
                  </InfoRow>
                  <InfoRow icon={<Phone className="h-5 w-5" />} title="Téléphone">
                    <a href={`tel:${site.phoneIntl}`} className="hover:text-brand-600">
                      {site.phoneDisplay}
                    </a>
                  </InfoRow>
                  <InfoRow icon={<Mail className="h-5 w-5" />} title="Email">
                    <a href={`mailto:${site.email}`} className="hover:text-brand-600">
                      {site.email}
                    </a>
                  </InfoRow>
                  <InfoRow icon={<Clock className="h-5 w-5" />} title="Horaires">
                    Samedi – Jeudi : 09:00 – 18:00
                    <br />
                    Vendredi : Fermé
                  </InfoRow>
                </ul>
              </div>

              <div className="card overflow-hidden">
                <iframe
                  title="Localisation du Cabinet Dentaire Dr Benabid"
                  src={site.map.embedSrc}
                  className="h-64 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <style jsx global>{`
        .input {
          width: 100%;
          border-radius: 0.9rem;
          border: 1px solid rgba(0, 0, 0, 0.1);
          background: #fff;
          padding: 0.7rem 0.95rem;
          font-size: 0.9rem;
          color: #1b1b1f;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .input:focus {
          outline: none;
          border-color: #c81e2d;
          box-shadow: 0 0 0 3px rgba(200, 30, 45, 0.12);
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-sm font-medium text-ink-soft">{label}</span>
      {children}
    </label>
  );
}

function InfoRow({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-gradient text-white">
        {icon}
      </span>
      <div>
        <p className="text-sm font-semibold text-ink">{title}</p>
        <p className="text-sm text-ink-soft">{children}</p>
      </div>
    </li>
  );
}
