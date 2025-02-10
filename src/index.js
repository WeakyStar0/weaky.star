import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";  // Main React component
import { BrowserRouter } from "react-router-dom";
import "./styles/App.css"; // Global styles (optional)
import "./styles/ErrorPage.css";

// Render React App inside #root div
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
