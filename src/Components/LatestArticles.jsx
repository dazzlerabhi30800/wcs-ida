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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-4 sm:gap-y-8 lg:gap-y-14 xl:gap-x-8">
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
