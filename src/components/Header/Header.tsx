import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Login from "./fragments/Login/Login";
import loginIcon from "../../assets/icons/icon-login.png";
import logoIcon from "../../assets/icons/logo.png"

const Header: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);

  const openLogin = () => setShowLogin(true);
  const closeLogin = () => setShowLogin(false);

  return (
    <header className="header">
      <img className="logo" src={logoIcon} alt="Página Inicial" />
      <nav>
        <Link to="/" className="nav-header">
          Página Inicial
        </Link>
        <Link to="/dashboard" className="nav-header">
          Campanhas
        </Link>
        <Link to="/profile" className="nav-header">
          Adote
        </Link>
      </nav>
      <button className="login-button" onClick={openLogin}>
        <img src={loginIcon} alt="Login" className="login-icon" />
      </button>
      <Login isOpen={showLogin} onClose={closeLogin} />
    </header>
  );
};

export default Header;
