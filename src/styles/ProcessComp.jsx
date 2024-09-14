import React from "react";
import { fontStyles, styles } from "../style";
import Para1 from "./Para1";

const ProcessComp = ({ data: { id, title, text } }) => {
  return (
    <div
      className={`${styles.flexCol} items-center text-center p-8 border border-mediumBlue/20 rounded-lg group transition-all hover:bg-mediumBlue/50 gap-6 hover:shadow-md`}
    >
      <div className={`${styles.flexCol} items-center `}>
        <h1
          className={`${fontStyles.h1} font-bold text-orange-500 leading-snug`}
        >
          {id < 10 ? `0${id}` : id}
        </h1>
        <h3
          className={`${fontStyles.h3} group-hover:text-white text-blue font-bold leading-tight`}
        >
          {title}
        </h3>
      </div>
      <Para1 fontWeight="font-normal" style="group-hover:text-white">
        {text}
      </Para1>
    </div>
  );
};

export default ProcessComp;
