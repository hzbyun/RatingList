import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <nav className="navigation">
        <ul>
          <li>
            <NavLink
              className="link"
              activeClassName="link_active"
              to="/"
              exact
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="link" activeClassName="link_active" to="/new">
              New
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
