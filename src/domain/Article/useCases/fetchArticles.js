import getArticlesFromApi from "../../../infrastructure/Article/repositories/getArticlesFromApi";

const fetchArticles = () => {
  return getArticlesFromApi({});
};

export default fetchArticles;
