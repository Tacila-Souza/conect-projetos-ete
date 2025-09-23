import logonavbar from "../../imagens/logo-navbar.png";
import "./Navbar.css"; // Certifique-se de que este caminho está correto para o seu Navbar.css
import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';

function Navbar() {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false); // Estado para controlar a visibilidade do menu lateral

  // Função para fechar o menu lateral
  const handleCloseMenu = () => setShowMenu(false);
  // Função para alternar a visibilidade do menu lateral (abrir/fechar)
  const handleToggleMenu = () => setShowMenu(!showMenu);

  return (
    <>
      {/* Div superior com cor azul escura */}
      <div className="top-bar"></div>

      {/* Navbar principal */}
      <nav className="custom-navbar-pure-css">
        <div className="navbar-container-pure-css">

          {/* Logo (é um link <a>) */}
          <Link className="navbar-logo-link" to="/">
            <img src={logonavbar} alt="Logo" className="navbar-logo-image" />
          </Link>

          {/* Botão de menu hambúrguer para mobile/tablet */}
          <button
            className="hamburger-menu-button"
            type="button"
            onClick={handleToggleMenu}
            aria-expanded={showMenu ? "true" : "false"}
            aria-label="Toggle navigation menu"
          >
            <span className="hamburger-icon-line"></span>
            <span className="hamburger-icon-line"></span>
            <span className="hamburger-icon-line"></span>
          </button>

          {/* Links de navegação para desktop */}
          <div className="navbar-links-desktop">
            <Link
              className={`nav-link-pure-css ${location.pathname === '/' ? 'active-page-pure-css' : ''}`}
              to="/"
            >
              Home
            </Link>
            <Link
              className={`nav-link-pure-css ${location.pathname === '/Projeto' ? 'active-page-pure-css' : ''}`}
              to="/Projeto"
            >
              Projetos
            </Link>
            <Link
              className={`nav-link-pure-css ${location.pathname === '/Cursos' ? 'active-page-pure-css' : ''}`}
              to="/Cursos"
            >
              Cursos
            </Link>
            <Link
              className={`nav-link-pure-css ${location.pathname === '/Sobre' ? 'active-page-pure-css' : ''}`}
              to="/Sobre"
            >
              Sobre Nós
            </Link>
          </div>
        </div>
      </nav>

      {/* Menu lateral (offcanvas-like) para mobile/tablet */}
      <div className={`sidebar-menu ${showMenu ? 'show' : ''}`}>
        <div className="sidebar-header">
          <h5 className="sidebar-title">Navegação</h5>
          <button
            type="button"
            className="sidebar-close-button"
            onClick={handleCloseMenu}
            aria-label="Close menu"
          >
            X
          </button>
        </div>
        <div className="sidebar-body">
          <ul>
            <li>
              <Link
                className={`sidebar-nav-link ${location.pathname === '/' ? 'active-page-pure-css' : ''}`}
                to="/"
                onClick={handleCloseMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`sidebar-nav-link ${location.pathname === '/Projeto' ? 'active-page-pure-css' : ''}`}
                to="/Projeto"
                onClick={handleCloseMenu}
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                className={`sidebar-nav-link ${location.pathname === '/Cursos' ? 'active-page-pure-css' : ''}`}
                to="/Cursos"
                onClick={handleCloseMenu}
              >
                Cursos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`sidebar-nav-link ${location.pathname === '/Sobre' ? 'active-page-pure-css' : ''}`}
                to="/Sobre"
                onClick={handleCloseMenu}
              >
                Sobre Nós
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;