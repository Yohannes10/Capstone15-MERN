// This is the Signin component responsible for user authentication.
// Upon successful login, it stores the JWT token in sessionStorage.

import React, { useContext, useState } from "react";
import { MainState } from "./AppLayout";
import "./Signin.css";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook for navigation
import ViewStock from "./ViewStock"; // Import the ViewStock component (assuming it displays the stock view)

export default function Signin(props) {
  // Retrieve the MainState context and useNavigate hook
  const value = useContext(MainState);
  const navigate = useNavigate(); // Initialize the useNavigate hook for programmatic navigation

  // State to manage user data and admin status
  let [isAdmin, setIsAdmin] = value;
  const [dbData, setDbData] = useState(sessionStorage.getItem("data"));
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // Handlers for capturing user input
  const handleEmail = (e) => {
    setUser({ ...user, email: e.target.value });
  };

  const handlePass = (e) => {
    setUser({ ...user, password: e.target.value });
  };

  // Function to login user
  const LoginUser = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:8080/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: user.email, password: user.password }),
    })
      .then((res) => res.json())
      .then((response) => {
        if (!response.hasOwnProperty("data")) {
          // Show an alert if login credentials are incorrect or user doesn't exist
          window.alert("Wrong credentials or user doesn't exist");
        } else {
          // Show an alert for successful login
          window.alert("Login successful");
        }

        // Update state and store token and user status in sessionStorage
        setDbData(response);
        setIsAdmin(response.data.admin);
        sessionStorage.setItem("token", response.token);
        sessionStorage.setItem("user", response.data.admin);

        // Redirect to the ViewStock component upon successful login
        navigate("/ViewStock");
      });
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="text"
              name="email"
              id="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={handleEmail}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={handlePass}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={LoginUser}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
