import "../styles/screens/Home.css";
import { Link } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";

function Home() {
  return (
    <main className="homeContainer">
      <div className="welcome">
        <div className="welcomeTitle">
          <div>Welcome to</div>
          <div style={{ display: "flex" }}>
            roobbs<div style={{ color: "#09cca9" }}>.BLOG</div>!
          </div>
        </div>
        <div className="welcomeText">
          Discover valuable resources and personal reflections on CSS,
          JavaScript, and the challenging path of self-taught learning in web
          development and programming in general.
        </div>
        <div className="welcomeText">
          <Link
            to="/signup"
            style={{
              paddingRight: 5,
              color: "#09cca9",
              textDecoration: "none",
            }}
          >
            Sign up now
          </Link>
          and discover more user features!
        </div>
        <Link className="link">
          Start reading <MdArrowRightAlt size={30} color="#09cca9" />
        </Link>
      </div>
    </main>
  );
}

export default Home;
