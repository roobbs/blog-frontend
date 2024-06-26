import { useState } from "react";
import "../styles/screens/SignUp.css";
import { useNavigate } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";
import { useContext } from "react";
import { UserContext } from "../App";

function SignUp() {
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

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

      if (result.success) {
        setMessage("User created successfully!");
        setUser(result.user);
        setError(null);
        localStorage.setItem("token", result.token);
        localStorage.setItem("blogUser", JSON.stringify(result.user));
        navigate("/");
      } else if (result.error.code === 11000) {
        setError(`El usuario "${formData.get("username")}" ya existe`);
      } else {
        setMessage(null);
        setError(result.message || "Server error, failed to create user");
      }
    } catch (error) {
      setMessage(null);
      console.log(error);
      setError("An error occurred. Please try again.");
    }
  };

  const handleInvalid = (e) => {
    if (e.target.name === "password") {
      e.target.setCustomValidity(
        "Password must contain at least one uppercase letter and one number."
      );
    }
  };

  const handleInput = (e) => {
    e.target.setCustomValidity("");
  };

  return (
    <main className="homeContainer">
      <div className="welcome welcomeForm">
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
              minLength={4}
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
              minLength={3}
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
              minLength={3}
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
              minLength={6}
              pattern="(?=.*[A-Z])(?=.*\d).{6,}"
              onInvalid={handleInvalid}
              onInput={handleInput}
            />
          </div>
          {error && <div className="errorMessage">° {error} :/</div>}
          <button type="submit" className="sentButton">
            Create account <MdArrowRightAlt size={30} color="#09cca9" />
          </button>
        </form>
        {message && <div className="successMessage">{message}</div>}
      </div>
    </main>
  );
}

export default SignUp;
