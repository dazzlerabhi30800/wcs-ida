import React from "react";
import { fontStyles, styles } from "../style";
import OurWorkBtn from "../Btns/OurWorkBtn";

const HeroSection = () => {
  return (
    <header className="bg-darkBlue min-h-[80vh] lg:min-h-screen flex py-12 lg:pt-0 lg:items-end lg:pb-20">
      <div
        className={`${styles.marginX} ${styles.flexResponsiveLarge} gap-14 md:gap-2 items-center md:justify-center  xl:gap-10 h-inherit w-full text-white`}
      >
        {/* Left */}
        <div className={`${styles.flexCol} gap-4 lg:gap-5 md:basis-[45%]`}>
          <span
            className={`${fontStyles.p2} bg-red-200 text-orange-500 font-openSans rounded-lg py-2 px-4 w-fit`}
          >
            Best Company Interior Design
          </span>
          <h1 className={`${fontStyles.h1} `}>Lorem ipsum dolor sit amet</h1>
          <p className={`${fontStyles.p1} font-openSans font-bold mt-1`}>
            Lorem ipsum dolor sit amet consectetur. Porttitor morbi cras
            venenatis sed faucibus aliquet. Vel egestas lacus accumsan diam
            pellentesque pretium congue malesuada in. Eu diam dui.
          </p>
          <OurWorkBtn />
        </div>
        {/* Right */}
        <div className="h-[400px] md:h-[500px] lg:h-[654px] w-full rounded-3xl  flex justify-end relative lg:overflow-hidden lg:flex-1 after:absolute after:content-[''] after:bottom-24 md:after:bottom-16 after:h-[180px] after:w-[150px] md:after:h-[230px] md:after:w-[200px] lg:after:h-[337px] lg:after:w-[294px] after:bg-grey  after:rounded-lg after:-left-[0]  ">
          <div className="right-hero rounded-lg lg:rounded-none h-full w-[90%] bg-cream"></div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
