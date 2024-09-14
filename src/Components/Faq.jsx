import React from "react";
import { fontStyles, styles } from "../style";
import SectionHeader from "../Styles/SectionHeader";
import Para1 from "../styles/Para1";
import { useGlobalContext } from "../context";
import AccordianComp from "../styles/AccordianComp";

const Faq = () => {
  const { accordianData } = useGlobalContext();
  return (
    <section className={`${styles.marginY}`}>
      <div className={`${styles.marginX} flex [&>div]:basis-1/2 gap-[86px]`}>
        <div className={`${styles.flexCol} gap-6`}>
          <div className={`${styles.flexCol} gap-6`}>
            <SectionHeader title="FAQs" heading="What They Ask" />
            <Para1 fontWeight="font-normal">
              Lorem ipsum dolor sit amet consectetur. Quam egestas sit sed felis
              molestie risus. Etiam ornare iaculis pretium vel vulputate purus.
            </Para1>
          </div>
          {/* FAQs Wrapper */}
          <div className={`${styles.flexCol} gap-6`}>
            {accordianData?.map((data, index) => (
              <AccordianComp data={data} key={index} />
            ))}
          </div>
        </div>
        <div className="w-full h-[672px] shadow-new-reverse bg-cream rounded-lg"></div>
      </div>
    </section>
  );
};

export default Faq;
