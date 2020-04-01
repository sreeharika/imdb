import React from "react";
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <div className="header">
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="Movielist">
        <li>Movielist</li>
      </Link>
      <Link to="/signin">
        <li>Signin</li>
      </Link>
    </div>
  );
}

export default Navigation;