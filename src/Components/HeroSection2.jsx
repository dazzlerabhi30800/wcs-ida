import React from "react";
import { fontStyles, styles } from "../style";
import { useGlobalContext } from "../context";
import Para1 from "../styles/Para1";

const HeroSection2 = () => {
  const { name, text } = useGlobalContext();
  return (
    <header className="min-h-[50vh] flex bg-darkBlue relative overflow-hidden">
      <div
        className={`${styles.marginX} h-inherit w-full text-white ${styles.flexCol} items-center justify-center lg:justify-end text-center gap-6 lg:pb-20`}
      >
        <h1 className={`${fontStyles.h1} font-bold`}>{name}</h1>
        <Para1 color="text-white" fontWeight="font-normal">
          {text}
        </Para1>
      </div>
      {/* Rings */}
      {/* Left */}
      <div className="w-36 h-36 md:w-44 md:h-44 lg:w-56 lg:h-56 absolute rounded-[50%] border-[35px] border-orange-400 -bottom-16 -left-16 lg:-bottom-20 lg:-left-20"></div>
      {/* Right */}
      <div className="w-32 h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 absolute rounded-[50%] border-[35px] border-orange-400 -bottom-12 -right-12 md:-bottom-16 md:-right-16 lg:-bottom-28 lg:-right-28"></div>
    </header>
  );
};

export default HeroSection2;
