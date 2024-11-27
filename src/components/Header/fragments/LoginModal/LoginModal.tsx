import "./LoginModal.css";
import React, { useState } from "react";
import Modal from "../../../Modal/Modal";
import Signup from "../SignupModal/SignupModal";
import logoIcon from "../../../../assets/icons/logo.png";
import api from "../../../../services/api";

interface LoginModalProps {
  isOpen: boolean;
  isClosed: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, isClosed }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isSignupOpen, setSignupOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await api.post("/login", {
        email,
        password,
      });

      if (response.status === 200) {
        alert(`Bem-vindo, ${response.data.name}`); // Exibir o nome do usuário ao logar
        isClosed(); // Fechar o modal após login
      }
    } catch (error) {
      alert("Erro ao fazer login. Verifique suas credenciais.");
    }
  };

  const openSignup = () => setSignupOpen(true);
  const closeSignup = () => setSignupOpen(false);

  

  return (
    <>
      <Modal isOpen={isOpen} isClosed={isClosed}>
        <div className="login-modal">
          <img src={logoIcon} alt="PetUnique" />
          <h2>Entre na conta PetUnique</h2>
          <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Senha:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Entrar</button>
          </form>
          <p className="signup-option">
            Ainda não possui conta?{" "}
            <span className="signup-link" onClick={openSignup}>
              CADASTRE-SE AQUI
            </span>
          </p>
        </div>
      </Modal>
      <Signup isOpen={isSignupOpen} isClosed={closeSignup} />
    </>
  );
};

export default LoginModal;
