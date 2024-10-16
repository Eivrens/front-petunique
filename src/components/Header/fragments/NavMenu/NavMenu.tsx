import "./NavMenu.css";
import React from "react";
import { Link } from "react-router-dom";

const NavMenu: React.FC = () => {
  return (
    <nav className="nav-menu">
      <Link to="/" className="nav-option">
        Página Inicial
      </Link>
      <Link to="/dashboard" className="nav-option">
        Campanhas
      </Link>
      <Link to="/profile" className="nav-option">
        Adote
      </Link>
    </nav>
  );
};

export default NavMenu;
