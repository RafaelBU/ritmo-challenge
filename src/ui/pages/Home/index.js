import ArticleCard from "../../components/ArticleCard";
import { v4 } from "uuid";
import useFetchArticles from "../../hooks/useFetchArticles";
import * as S from "./styles";

export default function Home() {
  const { isLoading, articles } = useFetchArticles();
  console.log({ isLoading, articles });

  if (isLoading) {
    return "Loading....";
  }

  return (
    <>
      <S.Header>
        <S.HeaderTitle>New York Times Articles</S.HeaderTitle>
      </S.Header>
      <S.BodyContainer>
        <S.Container>
          {articles.map((item) => (
            <ArticleCard key={v4()} article={item} />
          ))}
        </S.Container>
      </S.BodyContainer>
    </>
  );
}
