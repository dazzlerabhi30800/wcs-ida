import React from "react";
import { fontStyles, styles } from "../style";
import { useGlobalContext } from "../context";

const Gallery = () => {
  const { galleryData } = useGlobalContext();
  return (
    <section className={`mt-[40px] md:mt-[80px] lg:mt-[120px]`}>
      <div className={`${styles.marginX} ${styles.flexCol} gap-10 md:gap-14`}>
        <h2 className={`${fontStyles.h2} font-bold text-blue`}>
          Project Gallery
        </h2>
        {/* Gallery */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-[200px_200px] lg:grid-rows-[250px_250px] xl:grid-rows-[280px_280px] gap-4 sm:gap-3 md:gap-2 lg:gap-4`}>
          {galleryData?.map((gallery, index) => (
            <div className="galleryComp" key={index}>
              <img
                src={gallery}
                // className="w-full h-[300px] sm:h-[250px] md:h-[300px] lg:h-full rounded-lg object-cover"
                className="w-full h-[300px] sm:h-[250px] md:h-full rounded-lg object-cover"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
