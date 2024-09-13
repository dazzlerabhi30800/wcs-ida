import React from "react";
import { fontStyles } from "../style";

const SectionTitle = ({ children }) => {
  return (
    <span
      className={`${fontStyles.p2} font-openSans text-orange-600 bg-orange-100 shadow-sm py-3 px-6 rounded-lg w-fit`}
    >
      {children}
    </span>
  );
};

export default SectionTitle;
