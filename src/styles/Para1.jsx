import React from "react";
import { fontStyles } from "../style";

const Para1 = ({ children, color, style, fontWeight }) => {
  return (
    <p
      className={`${fontStyles.p1} font-openSans ${color ? color : "text-lightBlue"} ${fontWeight ? fontWeight : "font-bold"} ${style} max-w-[800px]`}
    >
      {children}
    </p>
  );
};

export default Para1;
