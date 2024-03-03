import { createContext, useEffect, useState } from "react";
import {
  authStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.util";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const value = { currentUser, setCurrentUser };
  useEffect(() => {
    const unsubscribe = authStateChangedListener((currentUser) => {
      if (currentUser) {
        createUserDocumentFromAuth(currentUser);
      }
      setCurrentUser(currentUser);
    });
    return () => unsubscribe();
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
