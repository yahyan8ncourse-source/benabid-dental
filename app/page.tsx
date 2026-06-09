import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import AboutPreview from "@/components/sections/AboutPreview";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import GalleryPreview from "@/components/sections/GalleryPreview";
import StatsBand from "@/components/sections/StatsBand";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <AboutPreview />
      <ServicesSection />
      <WhyChooseUs />
      <GalleryPreview />
      <StatsBand />
      <Testimonials />
      <FAQ />
      <ContactSection />
    </>
  );
}
