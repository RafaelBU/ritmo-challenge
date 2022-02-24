import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";

export default function Keyword({ word }) {
  return (
    <S.KeyContainer>
      <S.KeyValue title={word}>{word}</S.KeyValue>
    </S.KeyContainer>
  );
}

Keyword.propTypes = {
  word: PropTypes.string.isRequired,
};
