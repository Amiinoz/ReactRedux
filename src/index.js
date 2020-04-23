import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import "./style.css";

// myGllobal = 4;

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);
