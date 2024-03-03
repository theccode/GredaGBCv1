import { createContext, useEffect, useState } from "react";
import { getUsersData } from "../utils/firebase/firebase.util";

export const UserDetailsContext = createContext({
  userDetails: {},
});

export const UserDetailsProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState();
  const value = { userDetails };
  useEffect(() => {
    const getUserData = async () => {
      const user = await getUsersData();
      setUserDetails(user);
    };
    getUserData();
  }, []);
  return (
    <UserDetailsContext.Provider value={value}>
      {children}
    </UserDetailsContext.Provider>
  );
};
