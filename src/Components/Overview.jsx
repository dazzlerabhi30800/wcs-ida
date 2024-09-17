import React from "react";
import { fontStyles, styles } from "../style";
import Para1 from "../styles/Para1";

const Overview = () => {
  return (
    <section className={`mt-[40px] md:mt-[80px] lg:mt-[120px]`}>
      <div
        className={`${styles.marginX} ${styles.flexResponsiveLarge} lg:items-center gap-12 sm:gap-16 lg:[&>div]:basis-1/2 xl:gap-[86px]`}
      >
        <div
          className={`${styles.imgDimension} ${styles.shadow} w-full  rounded-lg`}
        >
          <img
            src="./images/Random Imgs/img1.jpg"
            className="w-full h-full object-cover rounded-lg"
            alt=""
          />
        </div>
        <div className={`${styles.flexCol} gap-6`}>
          <h2
            className={`${styles.flexRow} ${fontStyles.h2} gap-6 font-bold text-blue`}
          >
            Overview <span className="h-2 rounded-lg w-20 bg-orange-500"></span>
          </h2>
          <Para1 fontWeight="font-normal">
            Lorem ipsum dolor sit amet consectetur. Fermentum quam id mauris
            semper pretium urna. Sit et facilisis nisi eu. Luctus risus arcu
            tempor vulputate lectus tincidunt diam. Vestibulum elit quisque
            donec vestibulum quis fusce vitae nisl. Dictum tellus est dictumst
            mattis et faucibus. Morbi a ac a scelerisque non. Sagittis fusce
            quis tortor purus in viverra condimentum. Ante sollicitudin iaculis
            mauris tortor. Diam congue nunc neque mollis vulputate sodales
            sociis a. Volutpat risus viverra id vestibulum urna. Sed sit morbi
            natoque eu orci. Bibendum egestas et gravida massa posuere hac.
            Iaculis facilisis non maecenas malesuada arcu sed nunc viverra
            posuere.
          </Para1>
        </div>
      </div>
    </section>
  );
};

export default Overview;
