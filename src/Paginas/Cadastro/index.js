import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Componentes/Navbar";
import React, { useState } from "react";
import axios from "axios";
import "./Cadastro.css"; // Importa o arquivo CSS separado

function Cadastro() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook para redirecionar

  // Estados para a caixa de mensagem personalizada
  const [showMessage, setShowMessage] = useState(false);
  const [messageContent, setMessageContent] = useState("");
  const [messageType, setMessageType] = useState("info"); // 'info', 'success', 'error'

  // Função para exibir a caixa de mensagem
  const showCustomMessage = (content, type = 'info') => {
    setMessageContent(content);
    setMessageType(type);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000); // Esconde a mensagem após 3 segundos
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // A obrigatoriedade de preenchimento dos campos foi removida aqui.
    // A validação ocorrerá na API ou o backend lidará com campos vazios.

    try {
      const response = await axios.post("http://127.0.0.1:5000/api/register", {
        username,
        email,
        password,
      });
      showCustomMessage(response.data.message || "Cadastro realizado com sucesso!", "success");
      navigate("/Paglogin"); // Redireciona para a página de Paglogin após sucesso
    } catch (error) {
      if (error.response) {
        // Erro retornado pela API
        showCustomMessage(`Erro: ${error.response.data.message || "Erro ao se cadastrar"}`, "error");
      } else if (error.request) {
        // Erro de conexão com a API
        showCustomMessage("Erro ao conectar com o servidor. Verifique se ele está ativo.", "error");
      } else {
        // Outro erro
        showCustomMessage(`Erro inesperado: ${error.message}`, "error");
      }
    }
  };

  return (
    <>
      {/* <Navbar /> */} {/* Navbar mantida comentada para evitar erros de resolução */}
      <Navbar/>
      {/* Componente da caixa de mensagem */}
      {showMessage && (
        <div className={`message-box ${messageType}`}>
          {messageContent}
        </div>
      )}

      <div className="cadastro-page-wrapper"> {/* Container principal para o fundo e altura total */}
        <div className="cadastro-content-container"> {/* Centraliza o formulário horizontalmente */}
          <div className="cadastro-form-card"> {/* Card que contém o formulário de cadastro */}
            <h2 className="cadastro-title">Cadastro</h2>
            <form onSubmit={handleSubmit} className="cadastro-form">
              <div className="form-group">
                <label htmlFor="username" className="form-label">Nome de usuário:</label>
                <input
                  type="text"
                  className="form-input"
                  id="username"
                  placeholder="Seu nome de usuário"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">E-mail:</label>
                <input
                  type="email"
                  className="form-input"
                  id="email"
                  placeholder="seu.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="form-label">Senha:</label>
                <input
                  type="password"
                  className="form-input"
                  id="password"
                  placeholder="Sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-button-container">
                <button type="submit" className="cadastro-btn">Cadastrar</button>
              </div>
            </form>

            {/* Novo link para a página de login */}
            <div className="login-prompt-group">
              <p className="login-prompt-text">Já tem uma conta?</p>
              <Link to="/Login" className="login-prompt-link">Faça Login</Link>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Cadastro;