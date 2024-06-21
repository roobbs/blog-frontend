import "../styles/components/CommentModal.css";
import { useState } from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";

// const token = localStorage.getItem("token");
// console.log(token);

function CommentModal({ onClose, postId }) {
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(localStorage.getItem("token"));

    const formData = new FormData(e.target);
    const data = {
      message: formData.get("message"),
      postId: postId,
    };
    console.log(data.message);
    console.log(data.postId);

    try {
      const response = await fetch(
        "https://blog-api-production-87f1.up.railway.app/comment/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      console.log(result);

      if (result.success) {
        setError(null);
        // onClose();
      } else if (!result.success) {
        setError(result.message);
      } else {
        setError(result.message || "Server error, failed to logged user");
      }
    } catch (error) {
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
            <textarea
              name="message"
              id="message"
              placeholder="This is your message"
              minLength={6}
              required
              className="textarea"
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
