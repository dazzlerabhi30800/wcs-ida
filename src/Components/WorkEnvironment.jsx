import React from "react";
import { fontStyles, styles } from "../style";
import SectionHeader from "../styles/SectionHeader";
import { useGlobalContext } from "../context";
import Para1 from "../styles/Para1";

const WorkEnvironment = () => {
  const { workEnvironmentData } = useGlobalContext();
  return (
    <section className={`${styles.marginT2}`}>
      <div
        className={`${styles.marginX} ${styles.flexCol} text-center items-center gap-14`}
      >
        <SectionHeader
          align="center"
          title="Work Environment"
          heading="Best Workplace Environment"
        />
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-3 lg:gap-4`}>
          {workEnvironmentData?.map((data, index) => (
            <div
              key={index}
              className={`${styles.flexCol} items-center transition-all hover:bg-darkBlue hover:text-white text-blue border border-lightBlue/50 rounded-lg text-center p-6 sm:p-4 md:p-6 lg:p-8 gap-6`}
            >
              <div className={`${styles.flexCol} items-center`}>
                <h1 className={`${fontStyles.h1} text-orange-500 font-bold`}>
                  {data.id < 10 ? `0${data.id}` : data.id}
                </h1>
                <h2 className={`${fontStyles.h2} font-bold`}>{data.title}</h2>
              </div>
              <Para1 fontWeight="font-normal" style="hover:text-inherit">
                {data.info}
              </Para1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkEnvironment;
