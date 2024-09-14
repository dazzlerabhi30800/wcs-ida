import React from "react";
import { fontStyles, styles } from "../style";
import { useGlobalContext } from "../context";

const Gallery = () => {
  const { galleryData } = useGlobalContext();
  return (
    <section className={`mt-[120px]`}>
      <div className={`${styles.marginX} ${styles.flexCol} gap-14`}>
        <h2 className={`${fontStyles.h2} font-bold text-blue`}>
          Project Gallery
        </h2>
        {/* Gallery */}
        <div className={`grid grid-cols-4 grid-rows-[280px_280px] gap-4`}>
          {galleryData?.map((gallery, index) => (
            <div className="galleryComp" key={index}>
              <img
                src={gallery}
                className="w-full h-full rounded-lg object-cover"
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
