import "../styles/screens/Home.css";
import ArticleCard from "../components/ArticleCard";

function Home() {
  return (
    <main className="homeContainer">
      <div>See my most recent posts:</div>
      <div className="articles">
        <ArticleCard></ArticleCard>
        <ArticleCard></ArticleCard>
        <ArticleCard></ArticleCard>
      </div>
    </main>
  );
}

export default Home;
