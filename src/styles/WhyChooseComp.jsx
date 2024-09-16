import React from "react";
import { fontStyles, styles } from "../style";

const WhyChooseComp = ({ data: { title, info } }) => {
  return (
    <div
      className={`bg-mediumBlue/50 ${styles.flexCol} justify-end items-center gap-3 pt-4 md:pt-0 md:gap-4 px-2 pb-5 md:px-4 md:pb-8 text-center h-inherit flex-1 w-full text-white`}
    >
      <h4 className={`${fontStyles.h4}`}>{title}</h4>
      <p className={`${fontStyles.p1} font-bold font-openSans`}>{info}</p>
    </div>
  );
};

export default WhyChooseComp;
