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
        <div className="columns-2 md:columns-4 gap-0 w-full">
          {whyChooseData?.map((data, index) => (
            <WhyChooseComp data={data} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
