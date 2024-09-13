import React from "react";
import { fontStyles } from "../style";

const OurWorkBtn = () => {
  return (
    <button
      className={`${fontStyles.p1} font-notoSans bg-green text-white font-bold rounded-lg w-[192px] h-[56px] mt-5`}
    >
      Our Work
    </button>
  );
};

export default OurWorkBtn;
