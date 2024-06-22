import "../styles/components/CommentCard.css";
import { format } from "date-fns";

function CommentCard({ text, author, date }) {
  return (
    <div className="commentCard">
      <div className="commentText">{text}</div>
      <div
        style={{ display: "flex", gap: 10, justifyContent: "space-between" }}
      >
        <div className="commentAuthor">{author}</div>
        <div className="commentDate">{format(new Date(date), "dd-MMM-yy")}</div>
      </div>
    </div>
  );
}

export default CommentCard;
