import React from "react";
import { styles } from "../style";
import SectionHeader from "../styles/SectionHeader";
import ViewMoreBtn from "../Btns/ViewMoreBtn";
import { useGlobalContext } from "../context";
import BlogComp from "../styles/BlogComp";

const Blogs = () => {
  const { blogData } = useGlobalContext();
  return (
    <section className={`${styles.marginY}`}>
      <div className={`${styles.marginX} ${styles.flexCol} gap-14`}>
        <div className="flex items-end justify-between">
          <SectionHeader title="Our Blog" heading="Get A News" />
          <ViewMoreBtn />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-y-8 md:gap-y-0 sm:gap-4">
          {blogData?.map((data, index) => (
            <BlogComp data={data} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
