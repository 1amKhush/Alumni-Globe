import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GlobePreviewSection from "@/components/GlobePreviewSection";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import CommunitySection from "@/components/CommunitySection";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen">
        <HeroSection />
        <GlobePreviewSection />
        <StatsSection />
        <FeaturesSection />
        <CommunitySection />
        <EventsSection />
      </main>
      <Footer />
    </>
  );
}