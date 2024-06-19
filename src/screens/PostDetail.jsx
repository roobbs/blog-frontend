import { useParams } from "react-router-dom";

function PostDetail() {
  const postId = useParams();

  return <div>Post detail with id: {postId}</div>;
}

export default PostDetail;
