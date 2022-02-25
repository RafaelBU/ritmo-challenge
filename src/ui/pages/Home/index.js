import { useState, useEffect } from "react";
import ArticleCard from "../../components/ArticleCard";
import { v4 } from "uuid";
import useFetchArticles from "../../hooks/useFetchArticles";
import * as S from "./styles";
import Filters from "../../components/Filters";

export default function Home() {
  const [isFiltering, setIsFiltering] = useState(false);
  const [sortFilter, setSortFilter] = useState(null);
  const [facedFilter, setFacedFilter] = useState(null);

  useEffect(() => {
    if (sortFilter !== null) {
      setIsFiltering(true);
    }
  }, [sortFilter]);

  useEffect(() => {
    if (facedFilter !== null) {
      setIsFiltering(true);
    }
  }, [facedFilter]);

  const { isLoading, articles } = useFetchArticles({
    isFiltering,
    setIsFiltering,
    sortFilter,
    facedFilter,
  });

  const filterConfig = {
    sort: {
      setFunction: setSortFilter,
    },
    faced: {
      setFunction: setFacedFilter,
    },
  };

  const handleSelectFilter = ({ type, event }) => {
    const {
      target: { value },
    } = event;
    filterConfig[type].setFunction(value);
  };

  return (
    <>
      <S.Header>
        <S.HeaderTitle>New York Times Articles</S.HeaderTitle>
      </S.Header>
      <S.ContentContainer>
        <Filters handleSelectFilter={handleSelectFilter} />
        {isLoading ? (
          "Loading..."
        ) : (
          <S.ArticlesContainer>
            {articles.map((item) => (
              <ArticleCard key={v4()} article={item} />
            ))}
          </S.ArticlesContainer>
        )}
      </S.ContentContainer>
    </>
  );
}
