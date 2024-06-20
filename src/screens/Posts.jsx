import { useEffect, useState } from "react";
import "../styles/screens/Posts.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import ArticleCard from "../components/ArticleCard";
import { format } from "date-fns";
import { useContext } from "react";
import { UserContext } from "../App";

function Posts() {
  const [posts, setPosts] = useState(false);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          "https://blog-api-production-87f1.up.railway.app/posts"
        );
        const posts = await res.json();
        console.log(posts);
        setPosts(posts);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="postsContainer">
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        {user
          ? `${user.first_name}, read my recent posts:`
          : "See my recent posts:"}
        <IoIosArrowRoundForward size={35} color="#09cca9" />
      </div>
      {!posts && <div>wait ...</div>}
      {posts.length === 0 && <div>No hay posts que mostrar :/ </div>}
      <div className="postCardContainer">
        {posts.length > 0 &&
          posts.map((post) => (
            <ArticleCard
              key={post._id}
              id={post._id}
              title={post.title}
              text={post.text}
              readtime={post.readtime}
              label={post.label}
              date={format(new Date(post.date), "dd-MMM-yyyy")}
            />
          ))}
      </div>
    </div>
  );
}

export default Posts;
