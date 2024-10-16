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
      <div className="logo-container">
        <img className="logo" src={logoIcon} alt="Página Inicial" />
        <span className="petunique-name">PetUnique</span>
      </div>
      <NavMenu />
      <button className="login-button" onClick={openLogin}>
        <img src={loginIcon} alt="Login" className="login-icon" />
      </button>
      <LoginModal isOpen={isLoginOpen} isClosed={closeLogin} />
    </header>
  );
};

export default Header;
