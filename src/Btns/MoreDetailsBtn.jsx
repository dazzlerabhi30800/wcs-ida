import React from "react";
import { fontStyles, styles } from "../style";
import { MdArrowOutward } from "react-icons/md";

const MoreDetailsBtn = () => {
  return (
    <button
      className={`${styles.flexRow} ${fontStyles.p1} font-medium gap-1 group font-notoSans transition-all hover:scale-105`}
    >
      More Detail <MdArrowOutward className="text-xl relative bottom-[2px]" />
    </button>
  );
};

export default MoreDetailsBtn;
