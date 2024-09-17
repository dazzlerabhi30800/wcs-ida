import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import HeroSection2 from "../Components/HeroSection2";
import AboutUsComp from "../Components/AboutUsComp";
import Achievements from "../Components/Achievements";
import OurTeam from "../Components/OurTeam";

const AboutUs = () => {
  const { updateAboutPage } = useGlobalContext();

  useEffect(() => {
    updateAboutPage();
  }, []);

  return (
    <main>
      <HeroSection2 />
      <AboutUsComp />
      <Achievements />
      <OurTeam />
    </main>
  );
};

export default AboutUs;
