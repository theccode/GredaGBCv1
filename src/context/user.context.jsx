import { createContext, useState } from "react";

export const UserContext = createContext({
    userDetails: null,
    setUserDetails: () => null
})

export const UserProvider = ({ children }) => {
    const [userDetails, setUserDetails] = useState([]);
    const value = { userDetails, setUserDetails };
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}