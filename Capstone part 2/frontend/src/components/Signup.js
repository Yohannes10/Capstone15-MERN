// This component is responsible for user registration (signing up).

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook for programmatic navigation

export default function Signup(props) {
  // Initialize the useNavigate hook for navigation
  const history = useNavigate();

  // State to manage user registration data
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  let name, value;

  // Handler to capture user input and update the state accordingly
  const handleinputs = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({ ...user, [name]: value });
  };

  // Function to send user registration data to the server for processing
  const SendData = async (event) => {
    event.preventDefault();
    const { name, email, password, confirmpassword } = user;

    // Send user registration data to the server using a POST request
    const res = await fetch("http://localhost:8080/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        confirmpassword,
      }),
    });

    const data = await res.json();

    // Check the response from the server and handle accordingly
    if (res.status === 400 || !data) {
      // Show an alert if user already exists or incorrect information is supplied
      window.alert("User already exists or wrong info supplied");
      console.log("Invalid registration");
    } else if (res.status === 422) {
      // Show an alert if either the email already exists or the passwords do not match
      window.alert("Either email already exists or password didn't match");
    } else {
      // Show an alert for successful registration
      window.alert("Registration Successful");
      console.log("Registration Successful");
      // Redirect to the login page upon successful registration
      history.push("/login");
    }
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="string"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
              name="name"
              id="name"
              onChange={handleinputs}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control mt-1"
              placeholder="Email Address"
              onChange={handleinputs}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="form-control mt-1"
              onChange={handleinputs}
            />
          </div>
          <div className="form-group mt-3">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmpassword"
              id="confirmpassword"
              placeholder="Confirm Password"
              className="form-control mt-1"
              onChange={handleinputs}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={SendData}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
