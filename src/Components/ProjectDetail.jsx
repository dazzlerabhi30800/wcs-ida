import React from "react";
import { fontStyles, styles } from "../style";
import Para1 from "../styles/Para1";

const ProjectDetail = () => {
  return (
    <section className={`mt-40`}>
      <div className={`${styles.marginX} ${styles.flexCol} gap-6`}>
        {/* Gallery */}
        <div className="grid grid-cols-2 grid-rows-[327px_327px] gap-4">
          <img
            src="./images/Random Imgs/img1.jpg"
            className={`w-full h-full row-span-2 object-cover`}
            alt=""
          />
          <img
            src="./images/Random Imgs/img2.jpg"
            className={`w-full h-full object-cover`}
            alt=""
          />
          <img
            src="./images/Random Imgs/img3.jpg"
            className={`w-full h-full object-cover`}
            alt=""
          />
        </div>
        <div className={`${styles.flexCol} gap-14`}>
          <div className={`flex items-end gap-4`}>
            <h2
              className={`${fontStyles.h2} font-bold text-blue flex-1 leading-tight`}
            >
              Lorem ipsum dolor sit amet consectetur.
            </h2>
            <div className="basis-1/2 gap-y-2 grid grid-cols-2">
              <div className={`${styles.flexRow} w-fit gap-16`}>
                <Para1>Year:</Para1>
                <Para1 color="font-blue" fontWeight="font-semibold">
                  0000
                </Para1>
              </div>
              <div className={`${styles.flexRow} w-fit gap-16`}>
                <Para1>Category:</Para1>
                <Para1 color="font-blue" fontWeight="font-semibold">
                  Lorem
                </Para1>
              </div>
              <div className={`${styles.flexRow} w-fit gap-16`}>
                <Para1>Location:</Para1>
                <Para1 color="font-blue" fontWeight="font-semibold">
                  Lorem, Epsum
                </Para1>
              </div>
              <div className={`${styles.flexRow} w-fit gap-16`}>
                <Para1>Designer:</Para1>
                <Para1 color="font-blue" fontWeight="font-semibold">
                  Lorem Epsum
                </Para1>
              </div>
            </div>
          </div>
          <div className={`flex [&>div]:basis-1/2 gap-2`}>
            <div className={`${styles.flexCol} gap-6`}>
              <h3 className={`${fontStyles.h3} font-bold text-blue`}>
                Overview
              </h3>
              <Para1 fontWeight="font-normal">
                Lorem ipsum dolor sit amet consectetur. Volutpat volutpat mi
                amet amet. Augue cursus ac at id neque. Pulvinar diam turpis
                faucibus placerat consectetur lectus blandit ut in. Tortor eget
                ut eget duis sapien egestas. Ac imperdiet elit hac mattis. Enim
                hendrerit aliquet hendrerit massa. Non orci lobortis mauris cras
                sapien fringilla malesuada amet. Gravida nam euismod et elit.
                Turpis id viverra tellus mauris. Magna ultricies nisl aliquet
                sit quam elementum pretium. Potenti nulla.
              </Para1>
            </div>
            <div className={`${styles.flexCol} gap-6`}>
              <h3 className={`${fontStyles.h3} font-bold text-blue`}>
                Client Needs
              </h3>
              <Para1 fontWeight="font-normal">
                Lorem ipsum dolor sit amet consectetur. Volutpat volutpat mi
                amet amet. Augue cursus ac at id neque. Pulvinar diam turpis
                faucibus placerat consectetur lectus blandit ut in. Tortor eget
                ut eget duis sapien egestas. Ac imperdiet elit hac mattis. Enim
                hendrerit aliquet hendrerit massa. Non orci lobortis mauris cras
                sapien fringilla malesuada amet. Gravida nam euismod et elit.
                Turpis id viverra tellus mauris. Magna ultricies nisl aliquet
                sit quam elementum pretium. Potenti nulla.
              </Para1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
