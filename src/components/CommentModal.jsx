import "../styles/components/CommentModal.css";
import { useState } from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { useContext } from "react";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";
import { IoMdCloseCircle } from "react-icons/io";

function CommentModal({ onClose }) {
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
    };

    try {
      const response = await fetch(
        "https://blog-api-production-87f1.up.railway.app/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      console.log(result);

      if (result.success) {
        setMessage(result.msg);
        setUser(result.user);
        setError(null);
        localStorage.setItem("token", result.token);
        localStorage.setItem("blogUser", JSON.stringify(result.user));
        navigate("/");
      } else if (!result.success) {
        setError(result.message);
      } else {
        setMessage(null);
        setError(result.message || "Server error, failed to logged user");
      }
    } catch (error) {
      setMessage(null);
      console.log(error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <section className="modalBackground">
      <div className="modal">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="modalTitle">Send me your thoughts :)</div>
          <div onClick={onClose} className="closeModal" title="close">
            <IoMdCloseCircle color="red" size={30} />
          </div>
        </div>
        <form onSubmit={handleSubmit} className="blogForm">
          <div className="formGroup">
            <label htmlFor="message">Message</label>
            <span
              className="textarea"
              role="textbox"
              contentEditable
              name="message"
              id="username"
              placeholder="This is your message"
              minLength={10}
              required
            />
          </div>
          {error && <div className="errorMessage">° {error} :/</div>}
          <button type="submit" className="sentButton">
            Send <MdArrowRightAlt size={30} color="#09cca9" />
          </button>
        </form>
      </div>
    </section>
  );
}

export default CommentModal;
