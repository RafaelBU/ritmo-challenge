import useFetchArticles from "../../hooks/useFetchArticles";

export default function Home() {
  const { isLoading, articles } = useFetchArticles();
  console.log({ isLoading, articles });

  return <div>This is the home!!</div>;
}
