import React from "react";
import { styles } from "../style";
import SectionHeader from "../Styles/SectionHeader";
import { useGlobalContext } from "../context";
import TeamComp from "../styles/TeamComp";
import ViewMoreBtn from "../Btns/ViewMoreBtn";

const OurTeam = () => {
  const { teamData } = useGlobalContext();
  return (
    <section className={`${styles.marginY}`}>
      <div
        className={`${styles.marginX} ${styles.flexCol} items-center gap-10 `}
      >
        <SectionHeader
          title="Our Team"
          heading="Meet Our Team"
          align="center"
        />
        <div className="grid grid-cols-3 mt-4 gap-x-4 gap-y-6 w-full">
          {teamData?.map((data, index) => (
            <TeamComp data={data} key={index} />
          ))}
        </div>
        <ViewMoreBtn />
      </div>
    </section>
  );
};

export default OurTeam;
