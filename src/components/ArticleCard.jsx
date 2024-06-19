import "../styles/components/ArticleCard.css";
import { Link } from "react-router-dom";

function ArticleCard({ id, title, text, label, date }) {
  return (
    <Link to={`/posts/${id}`} className="linkCard">
      <section className="articleCard">
        <div className="readtime">readtime: 8min</div>
        <div className="articleTitle">{title}</div>
        <div className="articleText">{text}</div>
        <div className="dateContainer">
          <div className="articleLabel">{label}</div>
          <div>{date}</div>
        </div>
      </section>
    </Link>
  );
}

export default ArticleCard;
