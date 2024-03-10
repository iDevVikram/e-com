import React from "react";
import ReactDOM from "react-dom/client";
import TopBar from "./Components/TopBar";
import NavBar from "./Components/NavBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <TopBar />
    <NavBar />
  </>
);
