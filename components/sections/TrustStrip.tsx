import { ShieldCheck, Clock, MapPin, HeartHandshake } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "Hygiène & stérilisation rigoureuses" },
  { icon: HeartHandshake, label: "Soins doux et indolores" },
  { icon: Clock, label: "Ouvert 6j/7 · 09:00 – 18:00" },
  { icon: MapPin, label: "En plein cœur d'Alger Centre" },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-black/5 bg-white">
      <div className="container-px mx-auto grid max-w-7xl grid-cols-2 gap-6 py-8 lg:grid-cols-4">
        {items.map((it) => (
          <div key={it.label} className="flex items-center gap-3">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
              <it.icon className="h-5 w-5" />
            </div>
            <p className="text-sm font-medium text-ink-soft">{it.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
