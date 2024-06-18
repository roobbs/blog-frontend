import "../styles/screens/Home.css";
import ArticleCard from "../components/ArticleCard";

function Home() {
  return (
    <main className="homeContainer">
      <div>See my most recent posts:</div>
      <div className="articles">
        <ArticleCard
          title="title"
          text="text text text"
          label="css"
          date="date 3wqr k "
        ></ArticleCard>
        <ArticleCard
          title="title"
          text="text text text"
          label="css"
          date="date 3wqr k "
        ></ArticleCard>
        <ArticleCard
          title="title"
          text="text text text"
          label="css"
          date="date 3wqr k "
        ></ArticleCard>
      </div>
    </main>
  );
}

export default Home;
