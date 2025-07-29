import React from "react";
import ReactDOM from "react-dom/client";
import NetflixHome from "./NetflixHome.jsx";
import "./Netflix-Styles/netflix-General.css";
import "./Netflix-Styles/netflix-Home.css";
import "./Netflix-Styles/netflix-Header.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NetflixHome />
  </React.StrictMode>
);
