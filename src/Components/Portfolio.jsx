import React from "react";
import { fontStyles, styles } from "../style";
import { useGlobalContext } from "../context";
import SectionHeader from "../styles/SectionHeader";

const Portfolio = () => {
  const { portfolioData } = useGlobalContext();
  return (
    <section className={ `${styles.marginT}` }>
      <div
        className={`${styles.marginX} ${styles.flexCol} items-center text-center gap-12 md:gap-[100px] lg:gap-[120px]`}
      >
        <SectionHeader align="center" title="Our Portfolio" />
        <div className="grid grid-cols-12 w-full gap-1 sm:gap-y-2 md:gap-y-6 sm:gap-x-2 md:gap-x-4">
          {portfolioData?.map((data, index) => (
            <div
              className={`portfolioComp ${styles.flexCenter} h-[150px] sm:h-[200px] md:h-[320px] lg:h-[378px] overflow-hidden w-full relative group before:absolute before:content-[''] before:top-0 before:left-0 before:w-full before:h-full before:bg-black/0 after:transition-all hover:before:bg-black/40 `}
              key={index}
            >
              <img
                src={data.img}
                alt={data.text}
                className="h-full w-full object-cover absolute top-0 left-0 -z-10"
              />
              <h3
                className={`${fontStyles.h3} ${styles.transitionL} z-20 text-white relative translate-y-[500px] group-hover:translate-y-0 `}
              >
                {data.text}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
