import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import Catalog from "../components/catalog/Catalog";
import ContactSection from "../components/Contact/ContactSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Catalog />
      <ContactSection />
    </div>
  );
};

export default Home;
