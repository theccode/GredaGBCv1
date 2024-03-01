import { createContext, useEffect, useState } from "react";
import { getBuildingData } from "../utils/firebase/firebase.util";

export const BuildingsContext = createContext({
  buildingsMap: {},
});

export const BuildingsProvider = ({ children }) => {
  const [buildingsMap, setBuildingsMap] = useState([]);
  const value = { buildingsMap };
  useEffect(() => {
    const getSomeData = async () => {
      const data = await getBuildingData();
      setBuildingsMap(data);
    };
    getSomeData();
  }, []);
  return (
    <BuildingsContext.Provider value={value}>
      {children}
    </BuildingsContext.Provider>
  );
};
