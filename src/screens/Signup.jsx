import { useState } from "react";
import "../styles/screens/SignUp.css";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      username: formData.get("username"),
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      password: formData.get("password"),
    };

    try {
      const response = await fetch(
        "https://blog-api-production-87f1.up.railway.app/signup",
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

      if (response.ok) {
        setMessage("User created successfully!");
        setError(null);
        localStorage.setItem("token", result.token);
        navigate("/posts");
      } else {
        setMessage(null);
        setError(result.message || "Failed to create user");
      }
    } catch (error) {
      setMessage(null);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <main className="homeContainer">
      <div className="welcome">
        <div className="formTitle">Sign Up</div>
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
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              placeholder="First name"
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              name="last_name"
              id="last_name"
              placeholder="Last name"
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
          <button type="submit" className="sentButton">
            Create account
          </button>
        </form>
        {message && <div className="successMessage">{message}</div>}
        {error && <div className="errorMessage">{error}</div>}
      </div>
    </main>
  );
}

export default SignUp;
