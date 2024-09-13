import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import HeroSection from "../Components/HeroSection";
import Portfolio from "../Components/Portfolio";
import WhyChooseUs from "../Components/WhyChooseUs";
import OurServices from "../Components/OurServices";
import Testimonials from "../Components/Testimonials";
import Blogs from "../Components/Blogs";
import AboutUsComp from "../Components/AboutUsComp";

const Home = () => {
  const { updateHomePage } = useGlobalContext();
  useEffect(() => {
    updateHomePage();
  }, []);
  return (
    <main>
      <HeroSection />
      <AboutUsComp />
      <Portfolio />
      <WhyChooseUs />
      <OurServices />
      <Testimonials />
      <Blogs />
    </main>
  );
};

export default Home;
