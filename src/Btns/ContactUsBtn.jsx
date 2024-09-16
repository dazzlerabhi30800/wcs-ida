import React from "react";
import { fontStyles } from "../style";
import { useNavigate } from "react-router-dom";

const ContactUsBtn = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/contact")}
      className={`${fontStyles.p1} font-medium font-notoSans bg-green text-white rounded-lg w-[120px] h-[38px] md:h-[45px] lg:w-[163px] lg:h-[56px]`}
    >
      Contact Us
    </button>
  );
};

export default ContactUsBtn;
