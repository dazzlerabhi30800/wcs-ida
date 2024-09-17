import React from "react";
import { fontStyles, styles } from "../style";
import SectionTitle from "../Styles/SectionTitle";
import { useGlobalContext } from "../context";
import ProjectComp from "../styles/ProjectComp";
import LoadMoreBtn from "../Btns/LoadMoreBtn";

const Projects = () => {
  const { projectData } = useGlobalContext();
  return (
    <section className={`mt-[40px] md:mt-[80px] lg:mt-[120px] mb-[70px] md:mb-[120px] lg:mb-[160px]`}>
      <div
        className={`${styles.marginX} items-center ${styles.flexCol} gap-12 md:gap-14`}
      >
        <div
          className={`${styles.flexCol} items-center text-center gap-[38px] `}
        >
          <SectionTitle>See What We Have Done</SectionTitle>{" "}
          <h2 className={`${fontStyles.h2} font-bold text-blue`}>
            Lorem Ipsum Dolor
          </h2>
        </div>
        {/* Projects Wrapper */}
        <div className={`grid grid-cols-1 md:grid-cols-2 w-full  gap-x-4 gap-y-[22px]`}>
          {projectData?.map((data, index) => (
            <ProjectComp data={data} key={index} />
          ))}
        </div>
        <LoadMoreBtn />
      </div>
    </section>
  );
};

export default Projects;
