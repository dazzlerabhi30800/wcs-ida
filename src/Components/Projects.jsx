import React from "react";
import { fontStyles, styles } from "../style";
import SectionTitle from "../Styles/SectionTitle";
import { useGlobalContext } from "../context";
import ProjectComp from "../styles/ProjectComp";
import LoadMoreBtn from "../Btns/LoadMoreBtn";

const Projects = () => {
  const { projectData } = useGlobalContext();
  return (
    <section className={`mt-[120px] mb-[160px]`}>
      <div
        className={`${styles.marginX} items-center ${styles.flexCol} gap-14`}
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
        <div className={`grid grid-cols-2 w-full  gap-x-4 gap-y-[22px] mb-5`}>
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
