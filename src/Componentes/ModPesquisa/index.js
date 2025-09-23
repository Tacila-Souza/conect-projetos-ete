import React, { useState, useEffect } from "react"; // Importe useEffect
import { Search } from "lucide-react";
import "./ModPesquisa.css";

function ModPesquisa() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false); // Novo estado para controlar o foco

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
    // Adicione sua lógica de pesquisa aqui para o repositório
  };

  // Funções para lidar com o foco e desfoque do input
  const handleFocus = () => {
    setIsSearchFocused(true);
  };

  const handleBlur = () => {
    setIsSearchFocused(false);
  };

  // Efeito para adicionar/remover a classe ao body
  useEffect(() => {
    if (isSearchFocused) {
      document.body.classList.add("darken-background");
    } else {
      document.body.classList.remove("darken-background");
    }
    // Limpeza: remove a classe se o componente for desmontado enquanto focado
    return () => {
      document.body.classList.remove("darken-background");
    };
  }, [isSearchFocused]); // O efeito roda sempre que isSearchFocused muda

  return (
    <div className="search-container">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Pesquise por nome do projeto, integrantes, professo(a) ou curso"
          value={searchTerm}
          onChange={handleSearchChange}
          onFocus={handleFocus} // Adiciona o manipulador de foco
          onBlur={handleBlur}   // Adiciona o manipulador de desfoque
        />
        <button className="btn btn-primary search-button" onClick={handleSearch}>
          <Search className="me-2" /> <span className="button-text-normal">Pesquisar</span>
        </button>
      </div>
    </div>
  );
}

export default ModPesquisa;