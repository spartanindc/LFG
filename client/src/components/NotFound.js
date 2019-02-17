import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="container">
    <h2>This Page does not exist</h2>
    <Link to={"/"}>Go home, friend, you're lost</Link>
  </div>
);

export default NotFound;
