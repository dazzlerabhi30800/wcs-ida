import React from "react";
import { fontStyles } from "../style";

const LearnMoreBtn = () => {
  return (
    <button
      className={`${fontStyles.p1} font-notoSans bg-green text-white font-bold rounded-lg w-[192px] h-[56px] mt-5`}
    >
      Learn More
    </button>
  );
};

export default LearnMoreBtn;
