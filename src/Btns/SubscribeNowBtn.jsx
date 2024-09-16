import React from "react";
import { fontStyles } from "../style";

const SubscribeNowBtn = () => {
  return (
    <button
      className={`${fontStyles.p1} font-notoSans bg-green text-white font-bold rounded-lg h-10 md:h-14 px-3 md:px-4 lg:px-6 w-max whitespace-nowrap`}
    >
      Subscribe Now
    </button>
  );
};

export default SubscribeNowBtn;
