import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import { Home } from "../home/home.routes";

const PrivateRoute = () => {
  const { currentUser } = useContext(UserContext);
  if (currentUser) {
    localStorage.setItem("currentUser", currentUser);
    localStorage.setItem("username", currentUser.displayName);
    localStorage.setItem("photo", currentUser.photoURL);
  }
  return localStorage.getItem("currentUser") ? <Home /> : <Navigate to="/" />;
};

export default PrivateRoute;
