import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/sections/ContactSection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Rendez-vous",
  description: `Prenez rendez-vous au Cabinet Dentaire Dr Benabid, ${site.address.full}. Tél : ${site.phoneDisplay}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Prenons rendez-vous"
        subtitle="Une question, un soin, une urgence ? Contactez le cabinet — nous sommes à votre écoute 6 jours sur 7."
        breadcrumb="Contact"
      />
      <ContactSection />
    </>
  );
}
