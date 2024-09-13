import React from "react";
import { styles, fontStyles } from "../style";
import SectionTitle from "./SectionTitle";

const SectionHeader = ({ title, heading, align, gap }) => {
  const alignObj = {
    start: "flex-start",
    center: "items-center",
    end: "flex-end",
  };
  return (
    <div
      className={`${styles.flexCol} ${alignObj[align]} ${gap ? gap : "gap-4"}`}
    >
      <SectionTitle>{title}</SectionTitle>
      <h2 className={`${fontStyles.h2} font-semibold text-blue`}>
        {heading ? heading : "Lorem ipsum dolor sit amet"}
      </h2>
    </div>
  );
};

export default SectionHeader;
