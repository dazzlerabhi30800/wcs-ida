import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import HeroSection2 from "../Components/HeroSection2";
import Overview from "../Components/Overview";
import WorkProcess from "../Components/WorkProcess";
import Faq from "../Components/Faq";

const ServiceDetail = () => {
  const { updateServiceDetailPage } = useGlobalContext();
  useEffect(() => {
    updateServiceDetailPage();
  }, []);
  return (
    <main>
      <HeroSection2 />
      <Overview />
      <WorkProcess />
      <Faq />
    </main>
  );
};

export default ServiceDetail;
