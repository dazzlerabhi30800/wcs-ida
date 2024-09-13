import React from "react";
import { fontStyles } from "../style";

const ReadMoreBtn = () => {
  return (
    <button
      className={`${fontStyles.p1} font-notoSans border border-green text-green hover:text-white hover:bg-green font-bold rounded-lg w-full h-[56px] mt-2`}
    >
      Read More
    </button>
  );
};

export default ReadMoreBtn;
