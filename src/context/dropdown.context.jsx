import { createContext, useState } from "react";

export const DropdownContext = createContext({
  isDropdown: false,
  setIsDropdown: () => false,
});

export const DropdownProvider = ({ children }) => {
  const [isDropdown, setIsDropdown] = useState(false);
  const value = { isDropdown, setIsDropdown };
  return (
    <DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>
  );
};
