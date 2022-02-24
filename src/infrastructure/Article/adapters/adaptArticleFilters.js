const adaptArticleFilters = ({ filters }) => {
  const { sortFilter, facedFilter } = filters;
  return {
    sort: sortFilter,
    facet_fields: facedFilter,
  };
};

export default adaptArticleFilters;
