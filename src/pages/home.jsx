import React from "react";
import ImageSection from "../components/imageSection";
import HeroSection from "../components/heroSection";
import ProductSection from "../components/productSection";
import QualitySection from "../components/qualitySection";
import BannerSection from "../components/bannerSection";
import ExperienceSection from "../components/experienceSection";
import OfferSection from "../components/offerSection";

const Images = {
  section1:
    "https://res.cloudinary.com/duozomapm/image/upload/v1745810422/Screenshot_2025-04-28_085903_h2itiq.png",
  section2:
    "https://res.cloudinary.com/duozomapm/image/upload/v1745852230/Screenshot_2025-04-28_204048_xyljkt.png",
};

const Home = () => {
  return (
    <main className="w-full max-w-8xl mx-auto">
      <HeroSection />
      <ImageSection imageUrl={Images?.section1} />
      <ProductSection />
      <ImageSection imageUrl={Images?.section2} />
      <QualitySection />
      <OfferSection />
      <BannerSection />
      <ExperienceSection />
    </main>
  );
};

export default Home;
