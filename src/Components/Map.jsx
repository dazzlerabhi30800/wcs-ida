import React from "react";
import { styles } from "../style";

const Map = () => {
  return (
    <section className={`${styles.marginT}`}>
      <img
        src="./images/Maps.png"
        className="w-full h-[300px] sm:h-[400px] md:h-[529px] lg:h-[650px] xl:h-[729px] object-cover"
        alt=""
      />
    </section>
  );
};

export default Map;
