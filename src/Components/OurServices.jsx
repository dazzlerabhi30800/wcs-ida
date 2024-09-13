import React from "react";
import { styles } from "../style";
import SectionHeader from "../Styles/SectionHeader";
import Para1 from "../styles/Para1";
import { useGlobalContext } from "../context";
import ServiceComp from "../styles/ServiceComp";

const OurServices = () => {
  const { serviceData } = useGlobalContext();
  return (
    <section className={`${styles.marginT}`}>
      <div className={`${styles.marginX} ${styles.flexCol} gap-14`}>
        <div className={`${styles.flexCol} items-center text-center gap-6`}>
          <SectionHeader
            align="center"
            title="Our Services"
            heading="Lorem Ipsum Dolor Sit"
          />
          <Para1>
            Lorem ipsum dolor sit amet consectetur. Sed ultricies turpis ornare
            dolor ipsum adipiscing sit magna. Iaculis duis consectetur hendrerit
            justo vel.
          </Para1>
        </div>
        <div className="flex gap-4">
          {serviceData?.map((data, index) => (
            <ServiceComp data={data} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
