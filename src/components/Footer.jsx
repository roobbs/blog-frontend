import "../styles/components/Footer.css";
import { IoGitMergeOutline } from "react-icons/io5";

function Footer() {
  return (
    <footer className="footer">
      <div>© 2024</div>
      <IoGitMergeOutline color="#00cca7" size="18" />
      <div style={{ display: "flex" }}>
        roobbs <div style={{ color: "#00cca7", fontWeight: "900" }}>.BLOG</div>
      </div>
    </footer>
  );
}

export default Footer;
