import React from "react";
import { fontStyles, styles } from "../style";
import Para1 from "./Para1";
import LearnMoreBtn from "../Btns/LearnMoreBtn";

const DesignComp = ({ data: { img, title, info }, order }) => {
  return (
    <div
      className={`${styles.flexRow} ${
        order % 2 === 0 && "flex-row-reverse"
      } gap-[86px] [&>div]:basis-1/2`}
    >
      <div
        className={`${
          order % 2 === 0 ? "shadow-new" : "shadow-new-reverse"
        } w-full h-[672px] rounded-lg `}
      >
        <img
          src={img}
          alt={title}
          className="w-full rounded-lg h-full object-cover"
        />
      </div>
      <div className={`${styles.flexCol} gap-3`}>
        <h2
          className={`${fontStyles.h2} ${styles.flexRow} gap-14 text-blue font-bold`}
        >
          {title}
          <span className="h-2 w-20 bg-orange-500 rounded-[21px]"></span>
        </h2>
        <Para1 fontWeight="font-normal" style="mt-3">
          {info}
        </Para1>
        <LearnMoreBtn />
      </div>
    </div>
  );
};

export default DesignComp;
