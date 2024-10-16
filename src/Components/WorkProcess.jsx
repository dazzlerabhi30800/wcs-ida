import React from "react";
import { styles } from "../style";
import Para1 from "../styles/Para1";
import { useGlobalContext } from "../context";
import ProcessComp from "../styles/ProcessComp";
import SectionHeader from "../styles/SectionHeader";

const WorkProcess = () => {
  const { workProcessData } = useGlobalContext();
  return (
    <section className={`${styles.marginT}`}>
      <div className={`${styles.marginX} ${styles.flexCol} gap-14`}>
        <div className={`${styles.flexCol} items-center text-center gap-6`}>
          <SectionHeader
            align="center"
            title="Work Flow"
            heading="Our Work Process"
          />
          <Para1 fontWeight="font-normal" style="max-w-[600px]">
            Lorem ipsum dolor sit amet consectetur. Venenatis suscipit nam massa
            cras ultrices ullamcorper fermentum viverra et.
          </Para1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-3 lg:gap-x-4 gap-y-6 sm:gap-y-4 lg:gap-y-6">
          {workProcessData?.map((data, index) => (
            <ProcessComp data={data} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
