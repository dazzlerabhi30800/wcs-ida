import React from "react";
import { fontStyles } from "../style";

const ContactUsBtn = () => {
  return (
    <button
      className={`${fontStyles.p1} font-medium font-notoSans bg-green text-white rounded-lg w-[163px] h-[56px]`}
    >
      Contact Us
    </button>
  );
};

export default ContactUsBtn;
