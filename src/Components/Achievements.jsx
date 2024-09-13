import React from "react";
import { styles } from "../style";
import SectionHeader from "../Styles/SectionHeader";
import Para1 from "../styles/Para1";
import { useGlobalContext } from "../context";
import AchievementComp from "../styles/AchievementComp";

const Achievements = () => {
  const { achievementData } = useGlobalContext();
  return (
    <section className={`${styles.marginT}`}>
      <div
        className={`${styles.marginX} ${styles.flexRow} [&>div]:basis-1/2 gap-[86px]`}
      >
        {/* Left */}
        <div className={`${styles.flexCol} gap-10`}>
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
          <div className="flex gap-4">
            {achievementData?.map((data, index) => (
              <AchievementComp data={data} key={index} />
            ))}
          </div>
        </div>
        {/* Right */}
        <div
          className={`bg-cream w-full h-[642px] rounded-lg shadow-new-reverse`}
        ></div>
      </div>
    </section>
  );
};

export default Achievements;
