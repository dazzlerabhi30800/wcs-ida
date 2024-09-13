import React from "react";
import { fontStyles, styles } from "../style";
import { useGlobalContext } from "../context";
import Para1 from "../styles/Para1";

const HeroSection2 = () => {
  const { name, text } = useGlobalContext();
  return (
    <header className="min-h-[50vh] flex bg-darkBlue relative overflow-hidden">
      <div
        className={`${styles.marginX} h-inherit w-full text-white ${styles.flexCol} items-center justify-end text-center gap-6 pb-20`}
      >
        <h1 className={`${fontStyles.h1} font-bold`}>{name}</h1>
        <Para1 color="text-white" fontWeight="font-normal">
          {text}
        </Para1>
      </div>
      {/* Rings */}
      {/* Left */}
      <div className="w-56 h-56 absolute rounded-[50%] border-[35px] border-orange-400 -bottom-20 -left-20"></div>
      {/* Right */}
      <div className="w-52 h-52 absolute rounded-[50%] border-[35px] border-orange-400 -bottom-28 -right-28"></div>
    </header>
  );
};

export default HeroSection2;
