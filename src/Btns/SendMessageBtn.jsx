import React from "react";
import { fontStyles } from "../style";

const SendMessageBtn = () => {
  return (
    <button
      className={`${fontStyles.p1} font-medium font-notoSans bg-green text-white rounded-lg w-[130px] md:w-[163px] h-[38px] md:h-[45px] lg:h-[56px]`}
    >
      Send Message
    </button>
  );
};

export default SendMessageBtn;
