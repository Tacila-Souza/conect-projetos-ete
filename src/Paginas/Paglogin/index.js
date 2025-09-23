import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Componentes/Navbar";
import React, { useState } from "react";
import "./Paglogin.css";

function Paglogin() {
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
      <Navbar />
      {/* Ocupa a altura total da viewport menos a altura da Navbar e sem padding superior */}
      <div className="paglogin-background"> 
        <div className="container paglogin-container">
          <div className="row justify-content-center pb-3">
            <div className="col-8 col-md-6 col-lg-5"> {/* Adicionado col-md-6 e col-lg-5 para melhor responsividade */}
              <h2 className="text-center mt-4" id="hazul">Fazer Login</h2> {/* Ajustado margin-top */}
              <form onSubmit={handleLogin}>
                <div className="mb-4 mt-4"> {/* Aumentado mb-3 para mb-4 e mt-3 para mt-4 para espaçamento entre nome do campo e campo */}
                  <label htmlFor="email" className="form-label">Digite seu e-mail:</label> {/* Adicionada classe form-label do Bootstrap */}
                  <input
                    type="email"
                    className="form-control form-control-shadow" // Adicionada classe customizada para sombra
                    id="email"
                    placeholder="exemplo@email.com" // Adicionado placeholder
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4"> {/* Aumentado mb-3 para mb-4 para espaçamento entre nome do campo e campo */}
                  <label htmlFor="pwd" className="form-label">Digite sua senha:</label> {/* Adicionada classe form-label do Bootstrap */}
                  <input
                    type="password"
                    className="form-control form-control-shadow" // Adicionada classe customizada para sombra
                    id="pwd"
                    placeholder="Sua senha" // Adicionado placeholder
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-check mb-3">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" name="remember" /> Lembrar-me
                  </label>
                </div>
                {/* Botão centralizado com classe d-flex justify-content-center e um container */}
                <div className="d-flex justify-content-center"> 
                  <button type="submit" className="btn btn-primary paglogin-btn-entrar">Entrar</button>
                </div>
              </form>
              <div className="mt-3 mb-3 text-center"> {/* Centralizado o texto */}
                <p className="text-body-secondary d-inline me-1">Esqueceu a senha?</p> {/* Ajustado para inline e adicionado margin-right */}
                <a href="#" className="d-inline">Clique aqui</a> {/* Ajustado para inline */}
              </div>
              <div className="text-center mt-5"> {/* Aumentado margin-top e centralizado o texto */}
                <p className="text-body-secondary d-inline me-1">Não se cadastrou ainda?</p> {/* Ajustado para inline e adicionado margin-right */}
                <Link to="/cadastro" className="d-inline">Crie sua conta</Link> {/* Ajustado para inline */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Paglogin;