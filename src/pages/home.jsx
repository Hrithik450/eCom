import React from "react";
import HeroSection from "../components/heroSection";
import ProductSection from "../components/productSection";
import QualitySection from "../components/qualitySection";
import BannerSection from "../components/bannerSection";
import ExperienceSection from "../components/experienceSection";
import OfferSection from "../components/offerSection";
import HeadphoneSection from "../components/headphoneSection";
import VibeSection from "../components/vibeSection";

const Home = () => {
  return (
    <main className="w-full max-w-8xl mx-auto">
      <HeroSection />
      <HeadphoneSection />
      <ProductSection />
      <VibeSection />
      <QualitySection />
      <OfferSection />
      <BannerSection />
      <ExperienceSection />
    </main>
  );
};

export default Home;
