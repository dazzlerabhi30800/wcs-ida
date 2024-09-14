import React, { useEffect } from "react";
import ProjectDetail from "../Components/ProjectDetail";
import { useGlobalContext } from "../context";
import Gallery from "../Components/Gallery";
import Testimonials from "../Components/Testimonials";
import { styles } from "../style";

const ProjectDetailPage = () => {
  const { updateProjectDetailPage } = useGlobalContext();
  useEffect(() => {
    updateProjectDetailPage();
  }, []);
  return (
    <main>
      <ProjectDetail />
      <Gallery />
      <Testimonials margin={styles.marginY} />
    </main>
  );
};

export default ProjectDetailPage;
