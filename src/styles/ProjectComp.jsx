import React from "react";
import { fontStyles, styles } from "../style";
import Para1 from "./Para1";
import MoreDetailsBtn from "../Btns/MoreDetailsBtn";

const ProjectComp = ({ data: { img, title, heading, info } }) => {
  return (
    <div
      style={{ backgroundImage: `url("${img}")` }}
      className="projectComp group flex items-end p-10 bg-center bg-cover bg-no-repeat w-full h-[721px] rounded-lg overflow-hidden relative after:absolute after:content-[''] after:w-full after:top-0 after:left-0 after:h-full after:bg-transparent transition-all hover:after:bg-black/40"
    >
      <div
        className={`${styles.flexCol} ${styles.transitionL} gap-6 text-white relative z-40 translate-y-[600px] group-hover:-translate-y-0`}
      >
        <div className={`${styles.flexCol} gap-4`}>
          <span
            className={`${fontStyles.p2} font-openSans text-orange-600 bg-orange-100 shadow-sm py-3 px-6 rounded-lg w-fit`}
          >
            {title}
          </span>
          <h3 className={`${fontStyles.h3} font-bold`}>{heading}</h3>
        </div>
        <Para1 color="font-white" fontWeight="font-normal">
          {info}
        </Para1>
        <MoreDetailsBtn />
      </div>
    </div>
  );
};

export default ProjectComp;
