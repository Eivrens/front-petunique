import "./Header.css";
import React, { useState } from "react";
import LoginModal from "./fragments/LoginModal/LoginModal";
import loginIcon from "../../assets/icons/icon-login.png";
import logoIcon from "../../assets/icons/logo.png";
import NavMenu from "./fragments/NavMenu/NavMenu";

const Header: React.FC = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);

  const openLogin = () => setLoginOpen(true);
  const closeLogin = () => setLoginOpen(false);

  return (
    <header className="header">
      <img className="logo" src={logoIcon} alt="Página Inicial" />
      <NavMenu />
      <button className="login-button" onClick={openLogin}>
        <img src={loginIcon} alt="Login" className="login-icon" />
      </button>
      <LoginModal isOpen={isLoginOpen} isClosed={closeLogin} />
    </header>
  );
};

export default Header;
