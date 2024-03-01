import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/user.context";
import { StepsProvider } from "./context/form.context";
import { BuildingsProvider } from "./context/variable.context";
import { DropdownProvider } from "./context/dropdown.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <StepsProvider>
          <BuildingsProvider>
            <DropdownProvider>
              <App />
            </DropdownProvider>
          </BuildingsProvider>
        </StepsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
