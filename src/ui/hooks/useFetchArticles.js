import { useState, useEffect, useCallback } from "react";
import fetchArticles from "../../domain/Article/useCases/fetchArticles";
import fetchFilterArticles from "../../domain/Article/useCases/fetchFilterArticles";

export default function useFetchArticles({
  isFiltering,
  setIsFiltering,
  filters,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  // Fecth initial data
  const fetchArticlesAction = useCallback(async () => {
    try {
      const response = await fetchArticles();
      setArticles(response);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isLoading && articles.length === 0) {
      fetchArticlesAction();
    }
  }, [fetchArticlesAction, isLoading, articles]);

  // Filter data
  const fetchFilterArticlesAction = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetchFilterArticles({ filters });
      setArticles(response);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      setIsFiltering(false);
    }
  }, [filters, setIsFiltering]);

  useEffect(() => {
    if (isFiltering) {
      fetchFilterArticlesAction();
    }
  }, [isFiltering, fetchFilterArticlesAction]);

  return {
    isLoading,
    articles,
  };
}
