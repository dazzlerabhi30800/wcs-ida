import React from "react";
import { fontStyles, styles } from "../style";
import Para1 from "./Para1";

const AchievementComp = ({ data: { number, title } }) => {
  return (
    <div
      className={`${styles.flexCol} items-center text-center gap-2 p-4 rounded-2xl text-blue transition-all hover:bg-darkBlue hover:text-white`}
    >
      <h2 className={`${fontStyles.h2} font-bold text-orange-500`}>{number}</h2>
      <Para1 color="text-inherit">{title}</Para1>
    </div>
  );
};

export default AchievementComp;
