import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Componentes/Navbar";
import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Aqui você pode integrar com sua API para autenticação
    // Para fins de demonstração, estamos apenas redirecionando
    navigate("/Admin"); // Redireciona para a página de novo projeto
  };

  return (
    <>
    <Navbar/>
       {/* <Navbar /> */} {/* O componente Navbar foi removido do JSX para permitir a compilação */}
      <div className="login-page-wrapper"> {/* Container principal para o fundo e altura total */}
        <div className="login-content-container"> {/* Centraliza o formulário horizontalmente */}
          <div className="login-form-card"> {/* Card que contém o formulário de login */}
            <h2 className="login-title">Fazer Login</h2>
            <form onSubmit={handleLogin} className="login-form">
              <div className="form-group">
                <label htmlFor="email" className="form-label">Digite seu e-mail:</label>
                <input
                  type="email"
                  className="form-input"
                  id="email"
                  placeholder="exemplo@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="pwd" className="form-label">Digite sua senha:</label>
                <input
                  type="password"
                  className="form-input"
                  id="pwd"
                  placeholder="Sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-checkbox-group">
                <label className="form-checkbox-label">
                  <input type="checkbox" name="remember" className="form-checkbox-input" /> Lembrar-me
                </label>
              </div>
              <div className="form-button-container">
                <button type="submit" className="login-btn">Entrar</button>
              </div>
            </form>
            <div className="login-link-group">
              <p className="login-text">Esqueceu a senha?</p>
              <a href="#" className="login-link">Clique aqui</a>
            </div>
            <div className="login-link-group">
              <p className="login-text">Não se cadastrou ainda?</p>
              <Link to="/cadastro" className="login-link">Crie sua conta</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;