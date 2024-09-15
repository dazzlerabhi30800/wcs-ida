import React, { useEffect } from "react";
import ArticleDetail from "../Components/ArticleDetail";
import { useGlobalContext } from "../context";

const ArticlePage = () => {
  const { updateArticlePage } = useGlobalContext();
  useEffect(() => {
    updateArticlePage();
  }, []);
  return (
    <main>
      <ArticleDetail />
    </main>
  );
};

export default ArticlePage;
