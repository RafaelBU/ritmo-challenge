import React from "react";
import PropTypes from "prop-types";
import Select from "../Select";
import * as S from "./styles";

export default function Filters({ handleSelectFilter }) {
  return (
    <S.Container>
      <S.FilterTitle>Filters</S.FilterTitle>
      <S.FiltersContainer>
        <S.SelectContainer>
          <Select
            label="Type of sort"
            id="sort"
            options={[
              {
                key: "newest",
                value: "Newer",
              },
              {
                key: "oldest",
                value: "Oldest",
              },
              {
                key: "relevance",
                value: "Relevance",
              },
            ]}
            handleClick={handleSelectFilter}
          />
        </S.SelectContainer>

        <S.SelectContainer>
          <Select
            label="Faced type"
            id="faced"
            options={[
              {
                key: "day_of_week",
                value: "Day of week",
              },
              {
                key: "document_type",
                value: "Document type",
              },
              {
                key: "ingredients",
                value: "Ingredients",
              },
              {
                key: "news_desk",
                value: "News desk",
              },
              {
                key: "pub_month",
                value: "Pub month",
              },
              {
                key: "pub_year",
                value: "Pub year",
              },
              {
                key: "section_name",
                value: "Section name",
              },
              {
                key: "source",
                value: "Source",
              },
              {
                key: "subsection_name",
                value: "Subsection name",
              },
              {
                key: "type_of_material",
                value: "Type of material",
              },
            ]}
            handleClick={handleSelectFilter}
          />
        </S.SelectContainer>
      </S.FiltersContainer>
    </S.Container>
  );
}

Filters.propTypes = {
  handleSelectFilter: PropTypes.func.isRequired,
};
