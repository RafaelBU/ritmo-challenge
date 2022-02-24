import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import * as S from "./styles";
import Keyword from "../Keyword";

export default function ArticleCard({ article }) {
  const { title, summary, linkUrl, type, keywords } = article;
  return (
    <S.CardContainer>
      <S.Title>Title</S.Title>
      <p>{title}</p>
      <S.Title>Summary</S.Title>
      <p>{summary}</p>
      <p>
        <a href={linkUrl} target="_blank" rel="noreferrer">
          Read the full article here
        </a>
      </p>
      <S.Title>Type of article</S.Title>
      <p>{type}</p>
      <S.Divider />

      <S.KeysContainer>
        {keywords.map((item) => (
          <Keyword key={v4()} word={item} />
        ))}
      </S.KeysContainer>
    </S.CardContainer>
  );
}

ArticleCard.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string,
    summary: PropTypes.string,
    linkUrl: PropTypes.string,
    type: PropTypes.string,
    keywords: PropTypes.array,
  }).isRequired,
};
