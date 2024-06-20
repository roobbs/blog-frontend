import "../styles/screens/Home.css";
import { Link } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";
import { useContext } from "react";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";

function Home() {
  const { user, handleLogout } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <main className="homeContainer">
      <div className="welcome">
        <div className="welcomeTitle">
          <div style={{ color: "#09cca9" }}>
            {user && `${user.first_name} ${user.last_name}`}
          </div>
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
        {user ? (
          <div className="welcomeText">
            You can leave some comments now! or you can
            <div
              onClick={() => handleLogout(navigate("/"))}
              style={{
                paddingLeft: 5,
                color: "#09cca9",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Log out
            </div>
          </div>
        ) : (
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
        )}
        <Link className="link" to="/posts">
          Start reading <MdArrowRightAlt size={30} color="#09cca9" />
        </Link>
      </div>
    </main>
  );
}

export default Home;
