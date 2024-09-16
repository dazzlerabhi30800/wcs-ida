import React from "react";
import { fontStyles } from "../style";

const LearnMoreBtn = () => {
  return (
    <button
      className={`${fontStyles.p1} font-notoSans bg-green text-white font-bold rounded-lg w-[130px] h-[45px] lg:w-[192px] lg:h-[56px] mt-5`}
    >
      Learn More
    </button>
  );
};

export default LearnMoreBtn;
