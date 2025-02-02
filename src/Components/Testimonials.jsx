import React from "react";
import { fontStyles, styles } from "../style";
import Para1 from "../styles/Para1";

const Testimonials = ({ margin }) => {
  return (
    <section className={`${margin ? margin : styles.marginT} bg-mediumBlue/50`}>
      <div
        className={`${styles.marginX} ${styles.flexCol} items-center text-white gap-10 md:gap-14 py-16 md:py-20 lg:py-26`}
      >
        <h2 className={`${fontStyles.h2} font-semibold`}>
          What Our client Saying?
        </h2>
        <div className={`${styles.flexCol} text-center items-center gap-17`}>
          <Para1 color="text-white">
            Lorem ipsum dolor sit amet consectetur. Tristique iaculis felis
            lacus arcu ac amet quam cursus. Suscipit suscipit egestas risus in
            eu vel fames aenean. Fermentum purus odio augue vel interdum vitae
            morbi diam. Mauris adipiscing felis lacus nunc morbi. At quis
            curabitur vel purus cursus ultrices. Sed in non cum tortor at
            aliquam blandit sed. Elementum nulla eu dignissim netus et odio
            laoreet.
          </Para1>
          <div className={`${styles.flexRow} gap-2 md:gap-4`}>
            <div className="w-14 h-14 md:w-18 md:h-18 bg-cream rounded-[50%]"></div>
            <div className={`${styles.flexCol} gap-1 md:gap-2`}>
              <p className={`${fontStyles.p1}`}>Lorem ipsum</p>
              <p className={`${fontStyles.p2} font-bold`}>Lorem ipsum</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
