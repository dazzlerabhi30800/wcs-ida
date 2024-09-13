import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import HeroSection from "../Components/HeroSection";
import AboutUs from "../Components/AboutUs";
import Portfolio from "../Components/Portfolio";
import WhyChooseUs from "../Components/WhyChooseUs";
import OurServices from "../Components/OurServices";

const Home = () => {
  const { updateHomePage } = useGlobalContext();
  useEffect(() => {
    updateHomePage();
  }, []);
  return (
    <main>
      <HeroSection />
      <AboutUs />
      <Portfolio />
      <WhyChooseUs />
      <OurServices />
    </main>
  );
};

export default Home;
