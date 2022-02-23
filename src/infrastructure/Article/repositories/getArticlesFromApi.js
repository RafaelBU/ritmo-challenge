import restoreArticles from "../builders/restoreArticles";

const getArticlesFromApi = async () => {
  const { REACT_APP_API_KEY } = process.env;
  const apiCall = await fetch(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${REACT_APP_API_KEY}`
  );
  const data = await apiCall.json();
  const articles = data?.response?.docs || [];
  console.log("el data es ", data);
  return articles.map((article) => restoreArticles({ articleData: article }));
};

export default getArticlesFromApi;
