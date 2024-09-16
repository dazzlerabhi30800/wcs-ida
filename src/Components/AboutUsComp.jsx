import React from "react";
import { fontStyles, styles } from "../style";
import SectionTitle from "../Styles/SectionTitle";
import LearnMoreBtn from "../Btns/LearnMoreBtn";
import { useGlobalContext } from "../context";

const AboutUsComp = () => {
  const { aboutUs } = useGlobalContext();
  return (
    <section className={`${aboutUs?.marginT} bg-white`}>
      <div
        className={`${styles.marginX} ${styles.flexResponsiveLarge} items-center gap-16 md:gap-[86px] lg:[&>div]:basis-1/2`}
      >
        {/* Left */}
        <div
          className={`${styles.shadow} bg-cream w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-[642px] rounded-lg`}
        ></div>
        {/* Right */}
        <div className={`${styles.flexCol} gap-3 lg:gap-4`}>
          <SectionTitle>{aboutUs?.title}</SectionTitle>
          <h2
            className={`${fontStyles.h2} font-semibold text-blue leading-tight`}
          >
            {aboutUs?.heading}
          </h2>
          <p
            className={`${fontStyles.p1} text-lightBlue font-openSans ${
              aboutUs?.bold && "font-bold"
            } lg:mt-2 lg:mb-6`}
          >
            {aboutUs?.text}
          </p>
          {aboutUs?.showBtn && <LearnMoreBtn />}
        </div>
      </div>
    </section>
  );
};

export default AboutUsComp;
