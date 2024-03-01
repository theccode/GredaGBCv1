import { Fragment } from "react";
import { Auth } from "./components/auth/auth.component";
import { Footer } from "./shared/footer/footer.shared";
import "./App.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./routes/home/home.routes";
import Dashboard from "./components/Dashboard";
import FAQ from "./components/faq/Faq";

export const App = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home/*" element={<Home />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};
