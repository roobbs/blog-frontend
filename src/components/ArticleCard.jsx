import "../styles/components/ArticleCard.css";

function ArticleCard({ title, text, label, date }) {
  return (
    <section className="articleCard">
      <div className="articleTitle">{title}</div>
      <div className="articleText">{text}</div>
      <div className="dateContainer">
        <div className="articleLabel">{label}</div>
        <div>{date}</div>
      </div>
    </section>
  );
}

export default ArticleCard;
