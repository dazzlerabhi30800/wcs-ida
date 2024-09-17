import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../style";

const SocialComp = ({ data: { title, link } }) => {
  return (
    <Link
      to={link}
      className={`${styles.flexCenter} bg-green rounded-[50%] w-8 h-8 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[12px] sm:text-[10px] md:text-[12px] font-openSans text-white font-bold uppercase transition-all hover:brightness-125 hover:scale-125`}
      target="_blank"
    >
      {title}
    </Link>
  );
};

export default SocialComp;
