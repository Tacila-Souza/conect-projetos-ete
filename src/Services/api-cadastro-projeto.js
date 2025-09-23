import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Ajuste conforme o endereço da sua API

const ApiProjeto = {
  listarProjetos: async (pagina = 1, itensPorPagina = 10, filtro = '') => {
    try {
      const response = await axios.get(`${API_BASE_URL}/projects`, {
        params: {
          pagina,
          itens_por_pagina: itensPorPagina,
          filtro,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao listar projetos:', error);
      throw error;
    }
  },

  criarProjeto: async (projectData) => {
    try {
      const formData = new FormData();
      Object.entries(projectData).forEach(([key, value]) => {
        if (key === "images") {
          value.forEach((file) => formData.append("images", file));
        } else if (key === "logo" && value.length > 0) {
          formData.append("logo", value[0]);
        } else if (key === "creationDate") {
          formData.append("creationDate", `${value.month}-${value.year}`);
        } else if (key !== "featuredPosition" || projectData.isFeatured) {
          formData.append(key, value);
        }
      });

      const response = await axios.post(`${API_BASE_URL}/projects`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao criar projeto:', error);
      throw error;
    }
  },

  atualizarProjeto: async (id, projectData) => {
    try {
      const formData = new FormData();
      Object.entries(projectData).forEach(([key, value]) => {
        if (key === "images") {
          value.forEach((file) => formData.append("images", file));
        } else if (key === "logo" && value.length > 0) {
          formData.append("logo", value[0]);
        } else if (key === "creationDate") {
          formData.append("creationDate", `${value.month}-${value.year}`);
        } else if (key !== "featuredPosition" || projectData.isFeatured) {
          formData.append(key, value);
        }
      });

      const response = await axios.put(`${API_BASE_URL}/projects/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao atualizar projeto:', error);
      throw error;
    }
  },

  removerProjeto: async (id) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/projects/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao remover projeto:', error);
      throw error;
    }
  },
};

export default ApiProjeto;
