import {
  Sparkles,
  Layers,
  Sun,
  Crown,
  Anchor,
  AlignHorizontalDistributeCenter,
  ShieldCheck,
  Stethoscope,
  Brush,
  Award,
  Cpu,
  HeartHandshake,
  MapPin,
  BadgeCheck,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Sparkles,
  Layers,
  Sun,
  Crown,
  Anchor,
  AlignHorizontalDistributeCenter,
  ShieldCheck,
  Stethoscope,
  Brush,
  Award,
  Cpu,
  HeartHandshake,
  MapPin,
  BadgeCheck,
};

export default function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = map[name] ?? Sparkles;
  return <Cmp className={className} />;
}
