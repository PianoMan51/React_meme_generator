import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";
import ThingsList from "./components/ThingsList";

ReactDOM.render(
  <div className="page">
    <App />
    {/* <ThingsList /> */}
  </div>,
  document.getElementById("root")
);
