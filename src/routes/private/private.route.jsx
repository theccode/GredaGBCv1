import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import { Home } from "../home/home.routes";
import {
  checkUserAdminStatus,
  checkUserStatus,
} from "../../utils/firebase/firebase.util";

const PrivateRoute = () => {
  const { currentUser } = useContext(UserContext);
  useEffect(() => {
    const checkUserActivity = async () => {
      if (currentUser) {
        const active = await checkUserStatus(currentUser.uid);
        if (active) {
          localStorage.setItem("userActive", active);
        }
      }
    };
    checkUserActivity();
  }, []);
  useEffect(() => {
    const checkUserRole = async () => {
      if (currentUser) {
        const isAdmin = await checkUserAdminStatus(currentUser.uid);
        if (isAdmin) {
          localStorage.setItem("userIsAdmin", isAdmin);
        }
      }
    };
    checkUserRole();
  }, []);
  if (currentUser) {
    localStorage.setItem("currentUser", currentUser);
    localStorage.setItem("username", currentUser.displayName);
    localStorage.setItem("userId", currentUser.uid);
    localStorage.setItem("photo", currentUser.photoURL);
  }
  return localStorage.getItem("currentUser") &&
    (localStorage.getItem("userActive") === "true" ||
      localStorage.getItem("userActive") === null) ? (
    <Home />
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRoute;
