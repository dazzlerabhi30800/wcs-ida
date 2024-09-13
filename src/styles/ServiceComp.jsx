import React from "react";
import { fontStyles, styles } from "../style";
import Para1 from "./Para1";

const ServiceComp = ({ data: { icon, title, info } }) => {
  return (
    <div
      className={`${styles.flexCol} items-center text-center gap-6 p-10 bg-white border border-mediumBlue/40 rounded-lg group transition-all hover:border-transparent hover:bg-mediumBlue/50`}
    >
      <span className="text-green group-hover:text-white text-4xl">{icon}</span>
      <h3
        className={`${fontStyles.h3} font-bold text-blue group-hover:text-white`}
      >
        {title}
      </h3>
      <Para1 style="group-hover:text-white">{info}</Para1>
    </div>
  );
};

export default ServiceComp;
