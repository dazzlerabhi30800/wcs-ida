import React, { useEffect } from "react";
import { styles } from "../style";
import { useGlobalContext } from "../context";
import HeroSection2 from "../Components/HeroSection2";
import WhyChooseUs from "../Components/WhyChooseUs";
import DesignWrapper from "../Btns/DesignWrapper";
import Testimonials from "../Components/Testimonials";

const ServicePage = () => {
  const { updateServicePage } = useGlobalContext();
  useEffect(() => {
    updateServicePage();
  }, []);
  return (
    <main>
      <HeroSection2 />
      <WhyChooseUs />
      <DesignWrapper />
      <Testimonials />
    </main>
  );
};

export default ServicePage;
