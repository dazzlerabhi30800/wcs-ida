import React, { useEffect } from "react";
import HeroSection from "../Components/HeroSection";
import { useGlobalContext } from "../context";

const Home = () => {
  const { updateHomePage } = useGlobalContext();

  useEffect(() => {
    updateHomePage();
  }, []);

  return (
    <div>
      <HeroSection />
      <HeroSection />
      <HeroSection />
    </div>
  );
};

export default Home;
