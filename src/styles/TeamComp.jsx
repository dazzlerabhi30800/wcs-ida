import React from "react";
import { fontStyles, styles } from "../style";
import SocialComp from "./SocialComp";

const TeamComp = ({ data: { img, name, designation, socials } }) => {
  return (
    <div
      style={{ backgroundImage: `url("${img}")` }}
      className="bg-center bg-cover bg-no-repeat rounded-lg w-full h-[280px] sm:h-[230px] md:h-[300px] lg:h-[371px] p-4 sm:p-3 md:p-6 overflow-hidden flex group"
    >
      <div
        className={`${styles.flexColCenter} ${styles.transitionL} text-center text-white gap-2 h-inherit w-full bg-black/40 rounded-lg backdrop-blur-sm scale-1 md:scale-0 md:group-hover:scale-100`}
      >
        <h4 className={`${fontStyles.h4} font-bold`}>{name}</h4>
        <p className={`${fontStyles.p2} font-semibold`}>{designation}</p>
        <div className={`${styles.flexRow} gap-4 sm:gap-2 md:gap-4 mt-4`}>
          {socials?.map((social, index) => (
            <SocialComp data={social} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamComp;
