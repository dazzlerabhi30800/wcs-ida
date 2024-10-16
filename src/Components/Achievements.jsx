import React from "react";
import { styles } from "../style";
import Para1 from "../styles/Para1";
import { useGlobalContext } from "../context";
import AchievementComp from "../styles/AchievementComp";
import SectionHeader from "../styles/SectionHeader";

const Achievements = () => {
  const { achievementData } = useGlobalContext();
  return (
    <section className={`${styles.marginT}`}>
      <div
        className={`${styles.marginX} ${styles.flexResponsiveLarge} lg:items-center gap-16 md:gap-[86px]`}
      >
        {/* Left */}
        <div className={`${styles.flexCol} gap-10 lg:basis-1/2`}>
          <div className={`${styles.flexCol} gap-6`}>
            <SectionHeader
              title="Our Achievement"
              heading="Lorem ipsum dolor sit amet consectetur."
            />
            <Para1 fontWeight="font-normal">
              Lorem ipsum dolor sit amet consectetur. Amet placerat bibendum
              pretium amet duis eu sed. Risus vitae eget sed tristique a in.
              Sem.
            </Para1>
          </div>
          {/* Achievements Wrapper */}
          <div className="flex gap-2 sm:gap-4">
            {achievementData?.map((data, index) => (
              <AchievementComp data={data} key={index} />
            ))}
          </div>
        </div>
        {/* Right */}
        <div
          className={`${styles.shadowReverse} bg-cream lg:flex-1 w-full h-[350px] sm:h-[400px] md:h-[550px] xl:h-[642px] rounded-lg`}
        ></div>
      </div>
    </section>
  );
};

export default Achievements;
