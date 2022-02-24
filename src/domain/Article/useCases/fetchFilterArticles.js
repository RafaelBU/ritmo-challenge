import qs from "qs";
import adaptArticleFilters from "../../../infrastructure/Article/adapters/adaptArticleFilters";
import getArticlesFromApi from "../../../infrastructure/Article/repositories/getArticlesFromApi";

const fetchFilterArticles = ({ filters }) => {
  const adaptedFilters = adaptArticleFilters({ filters });
  const params = qs.stringify(adaptedFilters, { skipNulls: true });
  return getArticlesFromApi({ params });
};

export default fetchFilterArticles;
