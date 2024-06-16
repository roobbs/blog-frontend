import "../styles/Header.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { MdWork } from "react-icons/md";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header1">
        <div>roobbs</div>
        <ul>
          <li title="Home">
            <Link to="/" className="headerIcon">
              <GoHomeFill size={20} />
            </Link>
          </li>
          <li title="Github">
            <a href="https://github.com/roobbs" className="headerIcon">
              <FaGithub size={20} />
            </a>
          </li>
          <li title="Linkedin">
            <a href="https://github.com/roobbs" className="headerIcon">
              <FaLinkedin size={20} />
            </a>
          </li>
          <li title="Portfolio">
            <a href="https://roobbs.vercel.app" className="headerIcon">
              <MdWork size={20} />
            </a>
          </li>
        </ul>
      </div>

      <div className="header2">
        {/* <Link>BLOG</Link> */}
        <div className="headerBlog">BLOG</div>
        <ul className="ulButtons">
          <li>
            <Link className="userButton" to="/">
              All Posts
            </Link>
          </li>
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
