import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/screens/PostDetail.css";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { MdArrowRightAlt } from "react-icons/md";
import { UserContext } from "../App";
import { useContext } from "react";
import CommentModal from "../components/CommentModal";
import CommentCard from "../components/CommentCard";

function PostDetail() {
  const { postId } = useParams();
  const [post, setPost] = useState(false);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(false);
  const [update, setUpdate] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { user } = useContext(UserContext);

  console.log("comments: ");
  console.log(comments[0]);
  console.log("finish");

  useEffect(() => {
    const fetchSinglePost = async () => {
      try {
        const res = await fetch(
          `https://blog-api-production-87f1.up.railway.app/posts/${postId}`
        );
        const object = await res.json();
        console.log(object);
        setComments(object.comments);
        console.log(object.comments);
        setPost(object.post);
      } catch (err) {
        setError(err);
        console.log(err);
      }
    };
    fetchSinglePost();
  }, [postId, update]);

  return (
    <div className="singlePostContainer">
      <div>
        {error && <div>oops there is an error</div>}
        {!post && <div>wait...</div>}
        {post && (
          <div className="postContainer">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "1rem",
              }}
            >
              <div className="postReadtime">Readtime: {post.readtime}</div>
              <div className="label">{post.label}</div>
            </div>
            <div className="postTitle">{post.title}</div>
            <div dangerouslySetInnerHTML={{ __html: post.text }}></div>
            <div className="postAuthor">
              {post.author.first_name + " " + post.author.last_name}
            </div>
            <div className="postDate">
              {format(new Date(post.date), "dd-MMM-yyyy")}
            </div>
          </div>
        )}
      </div>
      <div className="postSidebar">
        <div className="postButtonsContainer">
          <Link to={"/posts"} className="postLink">
            <div>See more posts</div>
            <MdArrowRightAlt size={40} color="#09cca9" />
          </Link>
          {user && (
            <div
              className="postLink"
              style={{ cursor: "pointer" }}
              onClick={() => setShowModal(true)}
            >
              <div>{user.first_name}, add a comment! </div>
              <MdArrowRightAlt size={40} color="#09cca9" />
            </div>
          )}
        </div>

        <div className="commentsContainer">
          {post && comments.length === 0 && "there are no comments :/"}
          {post && comments.length > 0 && "Comments:"}
          {!post && <div>wait...</div>}
          {comments.map((c) => (
            <CommentCard
              key={c._id}
              text={c.text}
              author={c.author.username}
              date={c.date}
            />
          ))}
        </div>
      </div>
      {showModal && user && (
        <CommentModal
          onClose={() => setShowModal(false)}
          postId={postId}
          update={() => setUpdate(!update)}
        ></CommentModal>
      )}
    </div>
  );
}

export default PostDetail;
