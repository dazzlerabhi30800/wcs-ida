import React from "react";
import { styles } from "../style";
import SectionHeader from "../Styles/SectionHeader";
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
        <div className="flex gap-4">
          {blogData?.map((data, index) => (
            <BlogComp data={data} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
