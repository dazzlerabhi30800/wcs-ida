import React from "react";
import { fontStyles, styles } from "../style";
import Para1 from "./Para1";
import ReadMoreBtn from "../Btns/ReadMoreBtn";

const BlogComp = ({ data: { img, author, comment, title, info } }) => {
  return (
    <div className={`${styles.flexCol}`}>
      <img
        src={img}
        className="w-full h-[267px] object-cover rounded-lg"
        alt={title}
      />
      <div className={`${styles.flexCol} gap-4 pt-4`}>
        <div className={`${styles.flexRow} gap-12`}>
          <Para1 fontWeight="font-normal">{author}</Para1>
          <div className={`${styles.flexRow} gap-2`}>
            <span className="bg-lightBlue w-4 h-[1px]"></span>
            <Para1 fontWeight="font-normal">{comment} Comments</Para1>
          </div>
        </div>
        <h4 className={`${fontStyles.h4} font-bold text-blue`}>{title}</h4>
        <Para1 fontWeight="font-normal">{info}</Para1>
        <ReadMoreBtn />
      </div>
    </div>
  );
};

export default BlogComp;
