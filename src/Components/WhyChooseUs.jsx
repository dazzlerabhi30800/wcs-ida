import React from "react";
import { styles } from "../style";
import SectionHeader from "../Styles/SectionHeader";
import { useGlobalContext } from "../context";
import WhyChooseComp from "../Styles/WhyChooseComp";

const WhyChooseUs = () => {
  const { whyChooseData } = useGlobalContext();
  return (
    <section className={`${styles.marginT}`}>
      <div className={`${styles.marginX} ${styles.flexCol} gap-14`}>
        <SectionHeader title="Our Featured" heading="Why Choose Us" align="center" />
        <div className="flex flex-wrap min-h-[350px] md:h-[420px] lg:h-[536px]">
          {whyChooseData?.map((data, index) => (
            <WhyChooseComp data={data} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
