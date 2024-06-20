import { useState } from "react";
import "../styles/screens/SignUp.css";
import { useNavigate } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";

function LogIn() {
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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
        setError(null);
        localStorage.setItem("token", result.token);
        localStorage.setItem("blogUser", result.user);
        navigate("/posts");
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
    <main className="homeContainer">
      <div className="welcome">
        <div className="formTitle">Log In</div>
        <form onSubmit={handleSubmit} className="blogForm">
          <div className="formGroup">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="username"
              required
            />
          </div>

          <div className="formGroup">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Pass123"
              required
            />
          </div>
          {error && <div className="errorMessage">° {error} :/</div>}
          <button type="submit" className="sentButton">
            Log in <MdArrowRightAlt size={30} color="#09cca9" />
          </button>
        </form>
        {message && <div className="successMessage">{message}</div>}
      </div>
    </main>
  );
}

export default LogIn;
