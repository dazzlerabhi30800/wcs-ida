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
        className={`${styles.marginX} ${styles.flexRow} gap-[86px] [&>div]:basis-1/2`}
      >
        {/* Left */}
        <div
          className={`bg-cream w-full h-[642px] rounded-lg shadow-new`}
        ></div>
        {/* Right */}
        <div className={`${styles.flexCol} gap-4`}>
          <SectionTitle>{aboutUs?.title}</SectionTitle>
          <h2
            className={`${fontStyles.h2} font-semibold text-blue leading-tight`}
          >
            {aboutUs?.heading}
          </h2>
          <p
            className={`${fontStyles.p1} text-lightBlue font-openSans ${
              aboutUs?.bold && "font-bold"
            } mt-2 mb-6`}
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
