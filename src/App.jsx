import { Auth } from "./components/auth/auth.component";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./routes/private/private.route";
export const App = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/*" element={<Auth />} />
        <Route path="/home" element={<Auth />} />
        <Route path="/home/*" element={<PrivateRoute />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};
