// src/Paginas/Projeto/index.js
import React from 'react';
import Navbar from "../../Componentes/Navbar";
import Rodape from "../../Componentes/Rodape";
import ModPesquisa from "../../Componentes/ModPesquisa";
import './Projeto.css';

// Transformando 'projetosMock' em uma função que retorna os dados
const getProjetosMock = () => [
    {
        id: 1,
        titulo: 'Conect ETE PE',
        periodo: '06/25',
        curso: 'Desenvolvimento de Sistemas ',
        descricao: 'Plataforma online para centralizar a produção científica dos alunos, facilitando acesso a artigos e pesquisas. Promove troca de conhecimento e é construída com tecnologias web modernas.',
    },
    {
        id: 2,
        titulo: 'Inovação Sustentável no Semiárido',
        periodo: '07/25',
        curso: 'Planejamento e Controle de Produção ',
        descricao: 'Focado em soluções para gestão hídrica e energética no semiárido. Inclui captação de água da chuva e estudo de energias renováveis para otimizar a produção agrícola e a sustentabilidade.',
    },
    {
        id: 3,
        titulo: 'Turismo Acessível em Igarassu',
        periodo: '08/25',
        curso: 'Guia de Turismo ',
        descricao: 'Iniciativa para tornar pontos turísticos de Igarassu inclusivos para pessoas com deficiência. Cria rotas e materiais acessíveis, capacitando guias para um turismo mais justo.',
    },
    {
        id: 4,
        titulo: 'Otimização de Sistemas Elétricos Prediais',
        periodo: '09/25',
        curso: 'Eletrotécnica ',
        descricao: 'Pesquisa e aplicação de técnicas para melhorar a eficiência energética em edifícios. Analisa consumo e propõe sistemas de automação predial, reduzindo custos e promovendo uso consciente.',
    },
    {
        id: 5,
        titulo: 'Desenvolvimento de Aplicativos Mobile para Educação',
        periodo: '10/25',
        curso: 'Desenvolvimento de Sistemas ',
        descricao: 'Criação de apps móveis interativos para estudantes do ensino médio. Contam com jogos e quizzes educativos, tornando o aprendizado dinâmico e estimulando o interesse pela tecnologia.',
    },
    {
        id: 6,
        titulo: 'Logística Reversa de Resíduos Eletrônicos',
        periodo: '11/25',
        curso: 'Planejamento e Controle de Produção ',
        descricao: 'Estudo e implementação de um sistema de logística reversa para descarte de eletrônicos. Mapeia pontos de coleta e otimiza transporte, promovendo economia circular e sustentabilidade.',
    },
];

const ProjetosPage = () => {
    // Agora, chame a função para obter os dados.
    // Se você quisesse que os dados pudessem ser atualizados, usaria:
    // const [projetos] = useState(getProjetosMock());
    const projetos = getProjetosMock(); // Para dados estáticos que não mudam

    const totalProjetos = 40;
    const totalPaginas = 7;
    const paginaAtual = 1;

    const pageNumbers = [];
    for (let i = 1; i <= totalPaginas; i++) {
        pageNumbers.push(i);
    }

    const handlePageChange = (page) => {
        console.log('Navegar para página:', page);
    };

    return (
        <div className="projetos-page-wrapper">
            <Navbar />

            <div className="container">
                <h1 className="projetos-titulo">Todos os projetos do repositório</h1>

                <ModPesquisa/>
                
                <div className="lista-projetos">
                    {projetos.map(projeto => ( // Use 'projetos' obtido da função
                        <div className="card-projeto" key={projeto.id}>
                            <div className="imagem-placeholder">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 13.5L14 8.5L10 12.5L6 8.5L2 12.5L2 20H22V12.5L19 13.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M16 8C17.1046 8 18 7.10457 18 6C18 4.89543 17.1046 4 16 4C14.8954 4 14 4.89543 14 6C14 7.10457 14.8954 8 16 8Z" fill="currentColor"/>
                                </svg>
                            </div>
                            <div className="conteudo">
                                <h2 className="titulo-card">{projeto.titulo} <span className="meta-card">{projeto.periodo}</span></h2>
                                <p className="curso-card">
                                    <span className="curso-label">Curso:</span> {projeto.curso}
                                </p>
                                <p className="descricao-card"><br></br>{projeto.descricao}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="paginacao">
                    <span className="paginacao-resultado">Resultado: {totalProjetos} projeto(s) em {totalPaginas} página(s)</span>
                    <div className="paginacao-botoes">
                        {pageNumbers.map(number => (
                            <button
                                key={number}
                                className={`paginacao-botao ${number === paginaAtual ? 'active' : ''}`}
                                onClick={() => handlePageChange(number)}
                            >
                                {number}
                            </button>
                        ))}
                        <button
                            className="paginacao-botao"
                            onClick={() => handlePageChange(totalPaginas)}
                            disabled={paginaAtual === totalPaginas}
                        >
                            Última página
                        </button>
                    </div>
                </div>
            </div>

            <Rodape />
        </div>
    );
};

export default ProjetosPage;