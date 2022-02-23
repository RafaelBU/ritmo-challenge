import Article from "../../../domain/Article/entities/Article";

const restoreArticles = ({ articleData }) => {
  const { headline, abstract, type_of_material, web_url, keywords } =
    articleData;
  const keywordValues = keywords.map((key) => key.value);

  return new Article({
    title: headline?.main,
    summary: abstract,
    type: type_of_material,
    linkUrl: web_url,
    keywords: keywordValues,
  });
};

export default restoreArticles;
