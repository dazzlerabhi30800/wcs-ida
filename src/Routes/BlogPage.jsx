import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import HeroSection2 from "../Components/HeroSection2";
import LatestArticles from "../Components/LatestArticles";

const BlogPage = () => {
  const { updateBlogPage } = useGlobalContext();
  useEffect(() => {
    updateBlogPage();
  }, []);
  return (
    <main>
      <HeroSection2 />
      <LatestArticles />
    </main>
  );
};

export default BlogPage;
