import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Admin building</h1>
    <p>React and Redux web apps</p>
    <Link to="about" className="btn-primary-btn-lg">
      Learn more
    </Link>
  </div>
);

export default HomePage;
