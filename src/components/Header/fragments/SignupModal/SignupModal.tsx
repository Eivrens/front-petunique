import "./SignupModal.css";
import React, { useState } from "react";
import Modal from "../../../Modal/Modal";
import logoIcon from "../../../../assets/icons/logo.png";
import api from "../../../../services/api";

interface SignupModalProps {
  isOpen: boolean;
  isClosed: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ isOpen, isClosed }) => {
  const [fullName, setFullName] = useState("");
  const [cpfCnpj, setCpfCnpj] = useState("");
  const [dtBirth, setDtBirth] = useState("");
  const [gender, setGender] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [district, setDistrict] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("As senhas não são iguais. Digite novamente.");
      return;
    }

    const userData = {
      fullName,
      cpfCnpj: cpfCnpj.replace(/[^\d]/g, ""),
      dtBirth,
      gender,
      address: {
        street,
        number: parseInt(number, 10),
        complement,
        district,
        city,
        state,
        zip: zip.replace("-", ""),
      },
      phone,
      email,
      password,
    };

    try {
      console.log(userData); //DEBUG
      console.log(JSON.stringify(userData, null, 2)); // DEBUG
      const response = await api.post("/tutors/register", userData, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      alert("Cadastro realizado com sucesso!");

      console.log(response.data); // Log para depuração
      isClosed();
    } catch (error: any) {
      console.error("Erro ao cadastrar:", error);

      if (error.response) {
        alert(`Erro: ${error.response.data.message}`);
      } else {
        alert("Erro inesperado. Tente novamente mais tarde.");
      }
    }
  };

  const handleCpfCnpjChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 11) {
      setCpfCnpj(value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"));
    } else {
      setCpfCnpj(
        value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")
      );
    }
  };

  const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setZip(value.replace(/(\d{5})(\d{3})/, "$1-$2"));
  };

  return (
    <Modal isOpen={isOpen} isClosed={isClosed}>
      <div className="signup-modal">
        <img src={logoIcon} alt="PetUnique" />
        <h2>Crie sua conta PetUnique</h2>
        <form onSubmit={handleSubmit}>
          <label>Nome Completo:</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />

          <label>CPF ou CNPJ:</label>
          <input
            type="text"
            value={cpfCnpj}
            onChange={handleCpfCnpjChange}
            required
          />

          <label>Data de Nascimento:</label>
          <input
            type="date"
            value={dtBirth}
            onChange={(e) => setDtBirth(e.target.value)}
            required
          />

          <label>Sexo:</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)} required>
            <option value="">Selecione o sexo</option>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
          </select>

          <hr />

          <h3>Endereço:</h3>
          <label>Rua:</label>
          <input
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            required
          />

          <label>Número:</label>
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />

          <label>Complemento:</label>
          <input
            type="text"
            value={complement}
            onChange={(e) => setComplement(e.target.value)}
          />

          <label>Bairro:</label>
          <input
            type="text"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            required
          />

          <label>CEP:</label>
          <input type="text" value={zip} onChange={handleZipChange} required />

          <label>Cidade:</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />

          <label>UF:</label>
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          >
            <option value="">Selecione o estado</option>
            {[
              "AC - Acre",
              "AL - Alagoas",
              "AP - Amapá",
              "AM - Amazonas",
              "BA - Bahia",
              "CE - Ceará",
              "DF - Distrito Federal",
              "ES - Espírito Santo",
              "GO - Goiás",
              "MA - Maranhão",
              "MT - Mato Grosso",
              "MS - Mato Grosso do Sul",
              "MG - Minas Gerais",
              "PA - Pará",
              "PB - Paraíba",
              "PR - Paraná",
              "PE - Pernambuco",
              "PI - Piauí",
              "RJ - Rio de Janeiro",
              "RN - Rio Grande do Norte",
              "RS - Rio Grande do Sul",
              "RO - Rondônia",
              "RR - Roraima",
              "SC - Santa Catarina",
              "SP - São Paulo",
              "SE - Sergipe",
              "TO - Tocantins",
            ].map((state) => (
              <option key={state} value={state.split(" - ")[0]}>
                {state}
              </option>
            ))}
          </select>

          <hr />

          <label>Telefone:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(XX) XXXXX-XXXX"
            required
          />

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

          <label>Confirme a Senha:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </Modal>
  );
};

export default SignupModal;
