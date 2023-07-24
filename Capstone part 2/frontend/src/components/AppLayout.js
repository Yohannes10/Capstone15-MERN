//this component will be the parent of the signin, signup, view and add stock and the home page. This component will, however be a child of the App.js in the root directory

//I will use react-router to route to different pages
import { BrowserRouter, Route, Routes } from "react-router-dom";

import React, { useState, useEffect, useContext, createContext } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Signin from "./Signin";
import Signup from "./Signup";
import ViewStock from "./ViewStock";
import AddStock from "./AddStock";

export const MainState = createContext();

export default function AppLayout(props) {
  const [currentStock, setCurrentStock] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ name: "", email: "" });
  const [dbData, setDbData] = useState(sessionStorage.getItem("data"));
  const [isAdmin, setIsAdmin] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState("");


  const authToken = "" || sessionStorage.getItem("token");

  useEffect(() => {
    fetchData();
  }, [isLoggedIn]);

  useEffect(() => {
    if (
      sessionStorage.getItem("user") !== null &&
      sessionStorage.getItem("user") == true
    ) {
      setIsAdmin(true);
      console.log("session storage", sessionStorage.getItem("user"));
      console.log("setIsAdmin", isAdmin);
    } else {
      setIsAdmin(false);
    }
  }, []);

  const fetchData = () => {
    fetch("http://localhost:8080/stock/view", {
      headers: { Authorization: "Bearer " + authToken },
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setCurrentStock(response);
      });
  };

  return (
    <MainState.Provider value={[isAdmin, setIsAdmin]}>
      <div className="app-container">
        <>
          <BrowserRouter>
            <Navbar isAdmin={isAdmin} user={user} />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route
                path="/viewstock"
                element={
                  <ViewStock userName={user.name} currentStock={currentStock} />
                }
              ></Route>
              <Route
                path="/addstock"
                element={
                  <AddStock userName={user.name} currentStock={currentStock} />
                }
              ></Route>
              <Route
                path="/login"
                element={
                  <Signin
                    admin={isAdmin}
                    setLoggedInUser={setLoggedInUser}
                    user={user}
                    // sendState={sendState}
                  />
                }
              ></Route>
              <Route path="/signup" element={<Signup />}></Route>
            </Routes>
          </BrowserRouter>
        </>
      </div>
    </MainState.Provider>
  );
}
