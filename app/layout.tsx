import type { Metadata, Viewport } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { site } from "@/lib/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.dentist} — Dentiste à Alger Centre`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "dentiste Alger",
    "Dr Benabid Wahiba",
    "cabinet dentaire Alger Centre",
    "Didouche Mourad dentiste",
    "facettes dentaires Alger",
    "blanchiment dentaire Alger",
    "prothèse zircone Alger",
    "implants dentaires Alger",
    "esthétique dentaire",
    "orthodontie Alger",
  ],
  authors: [{ name: site.dentist }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.dentist}`,
    description: site.description,
    images: [{ url: "/images/og.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.dentist}`,
    description: site.description,
    images: ["/images/og.png"],
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/images/logo.png",
  },
  manifest: "/manifest.webmanifest",
  alternates: { canonical: site.url },
};

export const viewport: Viewport = {
  themeColor: "#c81e2d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: site.name,
    image: `${site.url}/images/logo.png`,
    "@id": site.url,
    url: site.url,
    telephone: site.phoneIntl,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: "DZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.map.lat,
      longitude: site.map.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Saturday",
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: [site.social.tiktok, site.social.facebook, site.social.instagram],
  };

  return (
    <html lang="fr" className={`${poppins.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NavBar />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
