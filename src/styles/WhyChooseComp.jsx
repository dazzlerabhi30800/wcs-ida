import React from "react";
import { fontStyles, styles } from "../style";

const WhyChooseComp = ({ data: { title, info } }) => {
  return (
    <div
      className={`bg-mediumBlue/50 ${styles.flexCol} justify-end items-center gap-4 px-4 pb-8 text-center h-inherit flex-1 w-full text-white`}
    >
      <h4 className={`${fontStyles.h4}`}>{title}</h4>
      <p className={`${fontStyles.p1} font-bold font-openSans`}>{info}</p>
    </div>
  );
};

export default WhyChooseComp;
