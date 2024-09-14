import React from "react";
import { fontStyles, styles } from "../style";
import { useGlobalContext } from "../context";
import BlogComp from "../styles/BlogComp";
import LoadMoreBtn from "../Btns/LoadMoreBtn";

const LatestArticles = () => {
  const { blogData } = useGlobalContext();
  return (
    <section className="mt-[120px] mb-40">
      <div
        className={`${styles.marginX} items-center ${styles.flexCol} gap-10`}
      >
        <h2 className={`${fontStyles.h2} font-bold text-blue`}>
          Latest Articles
        </h2>
        <div className="grid grid-cols-3 mt-4 w-full gap-x-4 gap-y-14">
          {blogData?.map((data, index) => (
            <BlogComp data={data} key={index} />
          ))}
        </div>
        <LoadMoreBtn />
      </div>
    </section>
  );
};

export default LatestArticles;
