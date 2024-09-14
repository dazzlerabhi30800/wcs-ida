import React from "react";
import { styles } from "../style";
import { useGlobalContext } from "../context";
import DesignComp from "../styles/DesignComp";

const DesignWrapper = () => {
  const { designData } = useGlobalContext();
  return (
    <section className={`${styles.marginT}`}>
      <div className={`${styles.marginX} ${styles.flexCol} gap-40`}>
        {designData?.map((data, index) => (
          <DesignComp data={data} order={index + 1} />
        ))}
      </div>
    </section>
  );
};

export default DesignWrapper;
