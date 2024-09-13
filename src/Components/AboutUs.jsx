import React from "react";
import { fontStyles, styles } from "../style";
import SectionTitle from "../Styles/SectionTitle";
import LearnMoreBtn from "../Btns/LearnMoreBtn";

const AboutUs = () => {
  return (
    <section className="mt-[104px] bg-white">
      <div
        className={`${styles.marginX} ${styles.flexRow} gap-[86px] [&>div]:basis-1/2`}
      >
        {/* Left */}
        <div
          className={`bg-cream w-full h-[642px] rounded-lg shadow-new`}
        ></div>
        {/* Right */}
        <div className={`${styles.flexCol} gap-4`}>
          <SectionTitle>About Us</SectionTitle>
          <h2
            className={`${fontStyles.h2} font-semibold text-blue leading-tight`}
          >
            Lorem ipsum dolor sit amet consectetur. Nunc.
          </h2>
          <p
            className={`${fontStyles.p1} text-lightBlue font-openSans font-bold mt-2 mb-6`}
          >
            Lorem ipsum dolor sit amet consectetur. Enim diam scelerisque enim
            sit varius sed ultricies pellentesque. In neque a donec maecenas
            dictum aliquet morbi fringilla. Justo vulputate facilisi cras
            tincidunt ullamcorper potenti egestas. Eget viverra consectetur
            pellentesque.
          </p>
          <LearnMoreBtn />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
