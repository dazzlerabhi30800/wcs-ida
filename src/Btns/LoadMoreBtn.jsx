import React from "react";
import { fontStyles } from "../style";

const LoadMoreBtn = () => {
  return (
    <button
      className={`${fontStyles.p1} font-notoSans bg-green text-white font-bold rounded-lg w-[192px] h-[56px] md:mt-5`}
    >
      View More
    </button>
  );
};

export default LoadMoreBtn;
