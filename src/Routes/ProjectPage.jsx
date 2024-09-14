import React, { useEffect } from "react";
import HeroSection2 from "../Components/HeroSection2";
import { useGlobalContext } from "../context";
import Projects from "../Components/Projects";

const ProjectPage = () => {
  const { updateProjectPage } = useGlobalContext();
  useEffect(() => {
    updateProjectPage();
  }, []);
  return (
    <main>
      <HeroSection2 />
      <Projects />
    </main>
  );
};

export default ProjectPage;
