import "../styles/components/Header.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { MdWork } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoGitMergeOutline } from "react-icons/io5";

function Header() {
  return (
    <header className="header">
      <div className="header1">
        <div
          style={{
            display: "flex ",
            gap: 10,
            alignItems: "center",
            fontSize: 22,
          }}
        >
          <IoGitMergeOutline color="#00cca7" size="20" />
          <div style={{ display: "flex" }}>
            roobbs{" "}
            <div style={{ color: "#00cca7", fontWeight: "900" }}>.BLOG</div>
          </div>
        </div>
        <ul>
          <li title="Home">
            <Link to="/" className="headerIcon">
              <GoHomeFill size={24} />
            </Link>
          </li>
          <li title="Github">
            <a
              href="https://github.com/roobbs"
              target="_blank"
              className="headerIcon"
            >
              <FaGithub size={24} />
            </a>
          </li>
          <li title="Portfolio">
            <a
              href="https://roobbs.vercel.app"
              target="_blank"
              className="headerIcon"
            >
              <MdWork size={24} />
            </a>
          </li>
          <li title="Linkedin">
            <a
              href="https://linkedin.com/in/carlos-salmeron/"
              target="_blank"
              className="headerIcon"
            >
              <FaLinkedin size={24} />
            </a>
          </li>
        </ul>
      </div>

      <div className="header2">
        <ul className="ulButtons">
          <li>
            <Link className="userButton" to="/login">
              Log In
            </Link>
          </li>
          <li>
            <Link className="userButton" to="/signup">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
