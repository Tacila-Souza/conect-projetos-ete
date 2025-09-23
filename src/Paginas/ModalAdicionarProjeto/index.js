import React, { useState, useEffect } from 'react';
import { FaPlusCircle } from 'react-icons/fa'; // Importa o ícone de mais
import './ModalAdicionarProjeto.css';

function ModalAdicionarProjeto({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    nome: '',
    logoProjeto: null,
    curso: '',
    modalidadeAluno: 'Ensino Médio',
    orientador: '',
    descricao: '',
    imagens: [{ file: null, descricao: '', previewUrl: null }],
    documentacao: null,
    linkGithub: '',
    inicioMes: '',
    inicioAno: '',
    contato: '',
    faseAtual: 'Desenvolvimento',
    destaque: false,
    posicaoDestaque: ''
  });

  const [logoPreview, setLogoPreview] = useState(null);
  const [docFileName, setDocFileName] = useState('');

  useEffect(() => {
    if (!isOpen) {
      if (logoPreview) URL.revokeObjectURL(logoPreview);
      formData.imagens.forEach(img => {
        if (img.previewUrl) URL.revokeObjectURL(img.previewUrl);
      });

      setLogoPreview(null);
      setDocFileName('');
      setFormData({
        nome: '',
        logoProjeto: null,
        curso: '',
        modalidadeAluno: 'Ensino Médio',
        orientador: '',
        descricao: '',
        imagens: [{ file: null, descricao: '', previewUrl: null }],
        documentacao: null,
        linkGithub: '',
        inicioMes: '',
        inicioAno: '',
        contato: '',
        faseAtual: 'Desenvolvimento',
        destaque: false,
        posicaoDestaque: ''
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = (name, file) => {
    if (file) {
      if (name === 'logoProjeto') {
        const previewUrl = URL.createObjectURL(file);
        setLogoPreview(previewUrl);
        setFormData((prevData) => ({ ...prevData, [name]: file }));
      } else if (name === 'documentacao') {
        setDocFileName(file.name);
        setFormData((prevData) => ({ ...prevData, [name]: file }));
      }
    } else {
      if (name === 'logoProjeto') {
        if (logoPreview) URL.revokeObjectURL(logoPreview);
        setLogoPreview(null);
        setFormData((prevData) => ({ ...prevData, [name]: null }));
      } else if (name === 'documentacao') {
        setDocFileName('');
        setFormData((prevData) => ({ ...prevData, [name]: null }));
      }
    }
  };

  const handleImageChange = (index, file) => {
    const novasImagens = [...formData.imagens];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      if (novasImagens[index].previewUrl) {
        URL.revokeObjectURL(novasImagens[index].previewUrl);
      }
      novasImagens[index] = { ...novasImagens[index], file: file, previewUrl: previewUrl };
    } else {
      if (novasImagens[index].previewUrl) {
        URL.revokeObjectURL(novasImagens[index].previewUrl);
      }
      novasImagens[index] = { ...novasImagens[index], file: null, descricao: '', previewUrl: null };
    }
    setFormData((prevData) => ({ ...prevData, imagens: novasImagens }));
  };

  const handleDescricaoImagemChange = (index, descricao) => {
    const novasImagens = [...formData.imagens];
    novasImagens[index].descricao = descricao;
    setFormData((prevData) => ({ ...prevData, imagens: novasImagens }));
  };

  const adicionarCampoImagem = () => {
    setFormData((prevData) => ({
      ...prevData,
      imagens: [...prevData.imagens, { file: null, descricao: '', previewUrl: null }]
    }));
  };

  const removerCampoImagem = (index) => {
    const novasImagens = [...formData.imagens];
    if (novasImagens[index].previewUrl) {
      URL.revokeObjectURL(novasImagens[index].previewUrl);
    }
    novasImagens.splice(index, 1);
    if (novasImagens.length === 0) {
      novasImagens.push({ file: null, descricao: '', previewUrl: null });
    }
    setFormData((prevData) => ({ ...prevData, imagens: novasImagens }));
  };

  // --- MODIFICAÇÃO CHAVE AQUI ---
  const handleSubmit = async (e) => { // Tornar assíncrono para o fetch
    e.preventDefault();

    const dataToSend = new FormData();

    // Adicionar campos de texto
    dataToSend.append('nome', formData.nome);
    dataToSend.append('curso', formData.curso);
    dataToSend.append('modalidadeAluno', formData.modalidadeAluno);
    dataToSend.append('orientador', formData.orientador);
    dataToSend.append('descricao', formData.descricao);
    dataToSend.append('linkGithub', formData.linkGithub);
    dataToSend.append('inicioMes', formData.inicioMes);
    dataToSend.append('inicioAno', formData.inicioAno);
    dataToSend.append('contato', formData.contato);
    dataToSend.append('faseAtual', formData.faseAtual);
    dataToSend.append('destaque', formData.destaque); // Boolean é convertido para 'true' ou 'false' string
    if (formData.destaque && formData.posicaoDestaque) {
        dataToSend.append('posicaoDestaque', formData.posicaoDestaque);
    }

    // Adicionar arquivos (logo e documentação)
    if (formData.logoProjeto) {
      dataToSend.append('logoProjeto', formData.logoProjeto);
    }
    if (formData.documentacao) {
      dataToSend.append('documentacao', formData.documentacao);
    }

    // Adicionar imagens do projeto (dinâmicas)
    formData.imagens.forEach((img, index) => {
      if (img.file) {
        dataToSend.append(`imagens[${index}].file`, img.file);
        dataToSend.append(`imagens[${index}].descricao`, img.descricao);
      }
    });

    // Chamar a função onSubmit passando o FormData
    // Você deve implementar a chamada fetch/axios para o backend na função onSubmit
    try {
      // Exemplo de como onSubmit deve ser implementado no componente pai:
      // const handleSubmit = async (data) => {
      //   const response = await fetch('http://127.0.0.1:5000/api/projects', {
      //     method: 'POST',
      //     body: data, // FormData é passado diretamente como body
      //   });
      //   const result = await response.json();
      //   console.log(result);
      // };
      const response = await onSubmit(dataToSend); // Assumindo que onSubmit fará a requisição HTTP
      if (response && response.ok) { // Verifica se a requisição foi bem-sucedida
        alert('Projeto adicionado com sucesso!');
        onClose();
      } else {
        const errorData = await response.json();
        alert(`Erro ao adicionar projeto: ${errorData.message || response.statusText}`);
      }
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
      alert('Erro ao enviar o formulário. Verifique a conexão ou tente novamente.');
    }
  };
  // --- FIM DA MODIFICAÇÃO CHAVE ---

  const meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const currentYear = new Date().getFullYear();
  const anos = Array.from({ length: currentYear - 1999 + 5 }, (_, i) => 2000 + i);


  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Adicionar Projeto</h2>
          <button className="close-button" onClick={onClose} aria-label="Fechar">
            &times;
          </button>
        </div>

        <div className="modal-body">
          <form onSubmit={handleSubmit}>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nomeProjeto">Nome do Projeto:</label>
                <input type="text" id="nomeProjeto" name="nome" value={formData.nome} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="curso">Curso:</label>
                <input type="text" id="curso" name="curso" value={formData.curso} onChange={handleChange} required />
              </div>
            </div>

            <div className="form-group image-upload-group">
              <label htmlFor="logoProjeto">Logo do Projeto:</label>
              <input type="file" id="logoProjeto" name="logoProjeto" accept="image/*" onChange={(e) => handleFileChange('logoProjeto', e.target.files[0])} />
              {logoPreview && (
                <div className="image-preview-container">
                  <img src={logoPreview} alt="Prévia da Logo" className="image-preview" />
                </div>
              )}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="modalidadeAluno">Modalidade do Aluno:</label>
                <select id="modalidadeAluno" name="modalidadeAluno" value={formData.modalidadeAluno} onChange={handleChange} required>
                  <option value="Ensino Médio">Ensino Médio</option>
                  <option value="Subsequente">Subsequente</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="orientador">Orientador:</label>
                <input type="text" id="orientador" name="orientador" value={formData.orientador} onChange={handleChange} />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="descricaoProjeto">Descrição do Projeto:</label>
              <textarea id="descricaoProjeto" name="descricao" value={formData.descricao} onChange={handleChange} required />
            </div>

            <div className="section-title">Imagens do Projeto</div>

            {/* CONTAINER PARA IMAGENS DINÂMICAS E BOTÃO DE ADICIONAR */}
            <div className="dynamic-images-section">
                {formData.imagens.map((img, index) => (
                  <div key={index} className="imagem-container">
                    <label htmlFor={`imagem-${index}`}>Imagem {index + 1}:</label>
                    <input type="file" id={`imagem-${index}`} accept="image/*" onChange={(e) => handleImageChange(index, e.target.files[0])} />
                    {img.previewUrl && (
                      <div className="image-preview-container">
                        <img src={img.previewUrl} alt={`Prévia da Imagem ${index + 1}`} className="image-preview" />
                      </div>
                    )}
                    <label htmlFor={`descricaoImagem-${index}`}>Descrição da Imagem:</label>
                    <input type="text" id={`descricaoImagem-${index}`} value={img.descricao} onChange={(e) => handleDescricaoImagemChange(index, e.target.value)} />
                    {/* Botão de remover sempre visível se houver um campo de imagem */}
                    <button type="button" className="btn-remove-image" onClick={() => removerCampoImagem(index)}>
                      Remover Imagem
                    </button>
                  </div>
                ))}
                {/* Botão de Adicionar Imagem - Novo Layout */}
                <div className="add-image-button-wrapper">
                    <button type="button" className="btn-add-image-new-style" onClick={adicionarCampoImagem}>
                        <div className="icon-circle"><FaPlusCircle className="plus-icon" /></div>
                        <p>Adicionar Nova Imagem</p>
                    </button>
                </div>
            </div>


            <div className="form-row">
              <div className="form-group">
                <label htmlFor="inicioMes">Início do Projeto (Mês):</label>
                <select id="inicioMes" name="inicioMes" value={formData.inicioMes} onChange={handleChange} required>
                  <option value="">Selecione o mês</option>
                  {meses.map((mes, idx) => (
                    <option key={idx} value={mes}>{mes}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="inicioAno">Início do Projeto (Ano):</label>
                <select id="inicioAno" name="inicioAno" value={formData.inicioAno} onChange={handleChange} required>
                  <option value="">Selecione o ano</option>
                  {anos.map((ano, idx) => (
                    <option key={idx} value={ano}>{ano}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contato">Contato:</label>
              <input type="text" id="contato" name="contato" value={formData.contato} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label htmlFor="faseAtual">Fase Atual:</label>
              <select id="faseAtual" name="faseAtual" value={formData.faseAtual} onChange={handleChange} required>
                <option value="Desenvolvimento">Desenvolvimento</option>
                <option value="Concluído">Concluído</option>
              </select>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="documentacao">Documentação/Apresentação (Word, PDF, Slide):</label>
                <input
                  type="file"
                  id="documentacao"
                  name="documentacao"
                  accept=".doc,.docx,.pdf,.ppt,.pptx"
                  onChange={(e) => handleFileChange('documentacao', e.target.files[0])}
                />
                {docFileName && <p className="file-name-display">Arquivo selecionado: <strong>{docFileName}</strong></p>}
              </div>
              <div className="form-group">
                <label htmlFor="linkGithub">Link do Repositório GitHub:</label>
                <input
                  type="url"
                  id="linkGithub"
                  name="linkGithub"
                  placeholder="Ex: https://github.com/usuario/repositorio"
                  value={formData.linkGithub}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group checkbox-group">
              <input type="checkbox" id="destaque" name="destaque" checked={formData.destaque} onChange={handleChange} />
              <label htmlFor="destaque">Marcar como Destaque</label>
            </div>

            {formData.destaque && (
              <div className="form-group">
                <label htmlFor="posicaoDestaque">Posição de Destaque:</label>
                <select id="posicaoDestaque" name="posicaoDestaque" value={formData.posicaoDestaque} onChange={handleChange} required>
                  <option value="">Selecione</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            )}

            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">Salvar</button>
              <button type="button" className="btn btn-secondary" onClick={onClose}>Cancelar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalAdicionarProjeto;