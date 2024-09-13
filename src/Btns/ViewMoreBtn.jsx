import React from "react";
import { fontStyles } from "../style";

const ViewMoreBtn = () => {
  return (
    <button
      className={`${fontStyles.p1} font-notoSans bg-green text-white font-bold rounded-lg w-[162px] h-[56px] mt-5`}
    >
      View More
    </button>
  );
};

export default ViewMoreBtn;
