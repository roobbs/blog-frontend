import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/screens/PostDetail.css";

function PostDetail() {
  const { postId } = useParams();
  const [post, setPost] = useState(false);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchSinglePost = async () => {
      try {
        const res = await fetch(
          `https://blog-api-production-87f1.up.railway.app/posts/${postId}`
        );
        const object = await res.json();
        console.log(object);
        setComments(object.comments);
        setPost(object.post);
      } catch (err) {
        setError(err);
        console.log(err);
      }
    };
    fetchSinglePost();
  }, [postId]);

  return (
    <div className="singlePostContainer">
      <div>
        {error && <div>oops there is an error</div>}
        {!post && <div>wait...</div>}
        {post && (
          <div className="postContainer">
            <div className="postTitle">{post.title}</div>
            <div dangerouslySetInnerHTML={{ __html: post.text }}></div>
            <div className="postAuthor">
              {post.author.first_name + " " + post.author.last_name}
            </div>
          </div>
        )}
        {comments.lenght && <div>There are comments</div>}
      </div>
      <div>Hola, aqui van algunos otros posts</div>
    </div>
  );
}

export default PostDetail;
