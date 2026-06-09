import { site } from "@/lib/site";

type Props = {
  className?: string;
  variant?: "dark" | "light";
  showText?: boolean;
};

export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label={`${site.name} logo`}
    >
      <defs>
        <linearGradient id="toothGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F86A52" />
          <stop offset="45%" stopColor="#E63E2B" />
          <stop offset="100%" stopColor="#8E1119" />
        </linearGradient>
        <linearGradient id="orbitGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#C81E2D" />
          <stop offset="100%" stopColor="#F86A52" />
        </linearGradient>
      </defs>

      {/* Tooth */}
      <path
        d="M32 6 C20 6 12 12 12 24 C12 32 14 38 16 46 C17 51 18 58 22 58 C26 58 26 50 28 44 C29 40 30 38 32 38 C34 38 35 40 36 44 C38 50 38 58 42 58 C46 58 47 51 48 46 C50 38 52 32 52 24 C52 12 44 6 32 6 Z"
        fill="url(#toothGrad)"
      />

      {/* Orbit ring */}
      <ellipse
        cx="32"
        cy="30"
        rx="30"
        ry="11"
        fill="none"
        stroke="url(#orbitGrad)"
        strokeWidth="3.2"
        transform="rotate(-18 32 30)"
        opacity="0.95"
      />

      {/* Sparkle */}
      <path
        d="M44 14 C44.8 18.4 46.6 20.2 51 21 C46.6 21.8 44.8 23.6 44 28 C43.2 23.6 41.4 21.8 37 21 C41.4 20.2 43.2 18.4 44 14 Z"
        fill="#ffffff"
      />
    </svg>
  );
}

export default function Logo({
  className = "",
  variant = "dark",
  showText = true,
}: Props) {
  const textColor = variant === "dark" ? "text-ink" : "text-white";
  const subColor = variant === "dark" ? "text-brand-600" : "text-brand-200";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-11 w-11 shrink-0" />
      {showText && (
        <span className="flex flex-col leading-none">
          <span className={`font-display text-lg font-extrabold tracking-tight ${textColor}`}>
            Dr Benabid
          </span>
          <span className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${subColor}`}>
            Cabinet Dentaire
          </span>
        </span>
      )}
    </span>
  );
}
