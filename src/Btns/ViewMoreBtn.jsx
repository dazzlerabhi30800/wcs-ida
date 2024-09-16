import React from "react";
import { fontStyles } from "../style";

const ViewMoreBtn = () => {
  return (
    <button
      className={`${fontStyles.p1} font-notoSans bg-green text-white font-bold rounded-lg w-[100px] h-[38px] md:h-[45px] lg:w-[162px] lg:h-[56px] mt-5`}
    >
      View More
    </button>
  );
};

export default ViewMoreBtn;
