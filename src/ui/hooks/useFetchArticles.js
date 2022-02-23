import { useState, useEffect, useCallback } from "react";
import fetchArticles from "../../domain/Article/useCases/fetchArticles";

export default function useFetchArticles() {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);

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
    fetchArticlesAction();
  }, []);

  return {
    isLoading,
    articles,
    fetchArticlesAction,
  };
}
