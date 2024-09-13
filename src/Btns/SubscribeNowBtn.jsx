import React from "react";
import { fontStyles } from "../style";

const SubscribeNowBtn = () => {
  return (
    <button
      className={`${fontStyles.p1} font-notoSans bg-green text-white font-bold rounded-lg h-14 px-6 w-fit`}
    >
      Subscribe Now
    </button>
  );
};

export default SubscribeNowBtn;
