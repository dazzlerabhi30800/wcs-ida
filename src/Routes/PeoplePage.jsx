import React, { useEffect } from "react";
import HeroSection2 from "../Components/HeroSection2";
import { useGlobalContext } from "../context";
import WorkEnvironment from "../Components/WorkEnvironment";
import Testimonials from "../Components/Testimonials";
import OurTeam from "../Components/OurTeam";

const PeoplePage = () => {
  const { updatePeoplePage } = useGlobalContext();
  useEffect(() => {
    updatePeoplePage();
  }, []);
  return (
    <main>
      <HeroSection2 />
      <WorkEnvironment />
      <Testimonials />
      <OurTeam />
    </main>
  );
};

export default PeoplePage;
