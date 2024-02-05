import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faKey } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import profileImage from "./profimg3.jpg";
import "./login.css";
import "./login1.css"; // Assuming you have a login.css file

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSignin = (event) => {
    event.preventDefault();

    // Basic validation (you can enhance as needed)
    if (!email.trim() || !password.trim()) {
      setError("Please enter your email and password.");
      return;
    }

    // Simulate authentication (replace with your actual authentication logic)
    if (email !== "shyam@gmail.com" || password !== "shyam") {
      setError("Invalid email or password.");
      return;
    }

    setError(""); // Clear error if successful
    navigate("/Demo"); // Assuming "Demo" is your destination
  };

  const handleImageClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="split-screen">
      <div className="left-side">
        <img
          src={profileImage}
          alt="Background"
          width="1000px"
          height="750px"
          onClick={handleImageClick}
        />
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <span className="close" onClick={closePopup}>
                &times;
              </span>
              <img src={profileImage} alt="Popup Image" />
            </div>
          </div>
        )}
      </div>
      <div className="right-side">
        <section>
          <form onSubmit={handleSignin}>
            <h1>
              Login <FontAwesomeIcon icon={faKey} />
            </h1>

            <div className={`inputbox ${error.includes('email') ? 'invalid' : ''}`}>
              <FontAwesomeIcon icon={faEnvelope} className="i1" />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="off"
                placeholder="Email"
              />
              <label htmlFor="email"></label>
            </div>

            <div className={`inputbox ${error.includes('password') ? 'invalid' : ''}`}>
              <FontAwesomeIcon icon={faLock} className="i1" />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="password"
              />
              <label htmlFor="password"></label>
            </div>

            {error && <div className="error-message">{error}</div>}

            <div className="forget">
              <label>
                <input type="checkbox" /> Remember Me
              </label>
              <Link to="#">Forget Password</Link>
            </div>

            <button type="submit">Log in</button>

            <div className="register">
              <p>
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Login;
