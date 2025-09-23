import React, { useState } from "react";
import { Search } from "lucide-react";
// Removido import "bootstrap/dist/css/bootstrap.min.css";
import "./Admin.css";
import ModalAdicionarProjeto from "../ModalAdicionarProjeto";
import ModPesquisa from "../../Componentes/ModPesquisa";

function Admin() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
    // Adicione sua lógica de pesquisa aqui
  };

  const abrirModalAdicionarProjeto = () => {
    setShowModal(true);
  };

  const fecharModalAdicionarProjeto = () => {
    setShowModal(false);
  };

  const fetchProjects = () => {
    console.log("Recarregando lista de projetos...");
    // Substitua este console.log pela função real que busca os projetos do back-end
  };

  return (
    <div className="admin-page-wrapper" style={{ backgroundColor: "#dfe8ff", minHeight: "100vh" }}>
      <div className="admin-container"> {/* Renomeado de 'container py-4' */}
        <div className="admin-card"> {/* Renomeado de 'card shadow-sm p-4' */}
          <h1 className="admin-title">Administração de Projetos</h1> {/* Renomeado de 'mb-4' */}

          {/* Botões das funcionalidades */}
          <div className="admin-buttons-group"> {/* Renomeado de 'd-flex gap-3 mb-4' */}
            <button className="admin-button primary-button" onClick={abrirModalAdicionarProjeto}>
              Adicionar Novo Projeto
            </button>
            <button className="admin-button warning-button"> {/* Renomeado de 'btn btn-warning' */}
              Editar Projeto
            </button>
            <button className="admin-button danger-button"> {/* Renomeado de 'btn btn-danger' */}
              Listar/Excluir Projetos
            </button>
          </div>

          <ModPesquisa/>

          {/* Modal para adicionar projeto */}
          <ModalAdicionarProjeto
            isOpen={showModal}
            onClose={fecharModalAdicionarProjeto}
            onSubmit={(formData) => {
              console.log("Projeto enviado:", formData);
              fetchProjects();
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Admin;