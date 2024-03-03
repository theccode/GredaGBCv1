import Dashboard from "../../components/Dashboard";
import { ColorModeContext, useMode } from "../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import FAQ from "../../components/faq/Faq";
import { Routes, Route } from "react-router-dom";
import Assessors from "../../components/Assessors";
import NewBuildingInfo from "../../components/Building";
import Variables from "../../components/Variables";
import Variable from "../../components/variable";
import Assessor from "../../components/Assessor";

export const Home = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/faq" element={<FAQ />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/new-assessor" element={<Assessor />} />
              <Route path="/assessors" element={<Assessors />} />
              <Route path="/NewBuildingInfo" element={<NewBuildingInfo />} />
              <Route path="/variables" element={<Variables />} />
              <Route path="/variables/:category" element={<Variable />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
