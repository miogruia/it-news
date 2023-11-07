import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Container from "react-bootstrap/Container";
import { useFetch } from "../../utils/hooks/useFetch";
import { getNewsCategoriesEndpoint } from "../../api/endpoints";
import { getNewsList } from "../../api/adaptors";
import NewsCardList from "../../components/NewsCard/NewsCardList";
import Pagination from "../../components/Pagination/Pagination";

function NewsCategory() {
  const { categoryId } = useParams();
  const [queryParams] = useSearchParams();
  const currentPage = queryParams.get("page") || 1;

  const newsCategoryEndpoint = getNewsCategoriesEndpoint(categoryId, currentPage);
  const news = useFetch(newsCategoryEndpoint);
  const adaptedNewsList = getNewsList(news);

  const title = getTitle(categoryId);

  return (
    <Layout>
      <Container className="my-5">
        <h1 className="mb-5 pt-3">{title}</h1>
        <NewsCardList newsList={adaptedNewsList} />
        <Pagination active={currentPage} baseUrl={`/category/${categoryId}`} />
      </Container>
    </Layout>
  );
}


function getTitle(categoryId) {
  switch (categoryId) {
    case "technology":
      return "Tech";
    case "football":
      return "Fotbal";
    case "fashion":
      return "Fashion";
    default:
      return "";
  }
}

export default NewsCategory;