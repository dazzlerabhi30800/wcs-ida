import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-3 px-6  bg-blue-gradient font-poppins font-medium text-[15px] text-primary outline-none ${styles} rounded-[10px]`}
    >
      Contact Us
    </button>
  );
};

export default Button;
