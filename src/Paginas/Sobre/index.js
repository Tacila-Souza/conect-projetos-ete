import React from 'react';
import  Navbar  from "../../Componentes/Navbar";
import Rodape from "../../Componentes/Rodape";
import './Sobre.css';
import imagemBanner from '../../imagens/equipe-completa.jpg'; // Imagem do banner
import imgTacila from '../../imagens/img-tacila.jpg';// Exemplo de imagem para card
import imgAllison from '../../imagens/img-tacila.jpg'; // Exemplo de imagem para card
import imgAna from '../../imagens/img-tacila.jpg'; // Assumindo outras imagens existam
import imgRicardo from '../../imagens/img-tacila.jpg';
import imgMariana from '../../imagens/img-tacila.jpg';
import imgCarlos from '../../imagens/img-tacila.jpg';
import imgSofia from '../../imagens/img-tacila.jpg';
import imgGustavo from '../../imagens/img-tacila.jpg';
import imgPatricia from '../../imagens/img-tacila.jpg';
import imgFernanda from '../../imagens/img-tacila.jpg';

const Sobre = () => {
    return (
        <>
            <Navbar />
            <div className="sobre-container">
                <header className="sobre-banner">
                    {/* A imagem de fundo será aplicada via CSS para melhor controle de responsividade */}
                </header>

                <section className="sobre-mensagem-diretor container-responsivo">
                    <p>
                        Com orgulho, apresento nossa essência: um espaço onde cada aluno é valorizado. Nosso compromisso é com
                        um ambiente de aprendizagem que acolhe, inspira e nutre o desenvolvimento integral. Acreditamos que a
                        educação floresce com respeito, empatia e a busca pela excelência, preparando nossos estudantes para
                        o futuro.
                    <br></br>
                    <strong>- Marcelo Fernandes de Souza</strong>

                    </p>
                </section>

                <section className="sobre-equipe">
                    <h2>Nossa Equipe</h2>
                    <div className="equipe-cards container-responsivo">
                        <div className="card">
                            <img src={imgAna} className="card-img" alt="Foto de Ana Paula Costa" />
                            <h3>Ana Paula Costa</h3>
                            <p>Diretora Pedagógica</p>
                        </div>
                        <div className="card">
                            <img src={imgRicardo} className="card-img" alt="Foto de Ricardo Almeida" />
                            <h3>Ricardo Almeida</h3>
                            <p>Coordenador de Ensino</p>
                        </div>
                        <div className="card">
                            <img src={imgMariana} className="card-img" alt="Foto de Mariana Santos" />
                            <h3>Mariana Santos</h3>
                            <p>Orientadora Educacional</p>
                        </div>
                        <div className="card">
                            <img src={imgCarlos} className="card-img" alt="Foto de Carlos Eduardo Pereira" />
                            <h3>Carlos Eduardo Pereira</h3>
                            <p>Professor de Ciências</p>
                        </div>
                        <div className="card">
                            <img src={imgSofia} className="card-img" alt="Foto de Sofia Mendes" />
                            <h3>Sofia Mendes</h3>
                            <p>Professora de Artes</p>
                        </div>
                        <div className="card">
                            <img src={imgGustavo} className="card-img" alt="Foto de Gustavo Lima" />
                            <h3>Gustavo Lima</h3>
                            <p>Bibliotecário</p>
                        </div>
                        <div className="card">
                            <img src={imgPatricia} className="card-img" alt="Foto de Patrícia Ribeiro" />
                            <h3>Patrícia Ribeiro</h3>
                            <p>Secretária Escolar</p>
                        </div>
                        <div className="card">
                            <img src={imgFernanda} className="card-img" alt="Foto de Fernanda Carvalho" />
                            <h3>Fernanda Carvalho</h3>
                            <p>Psicóloga Escolar</p>
                        </div>
                    </div>
                </section>

                <section className="sobre-convite">
                    <div className="container-responsivo"> {/* Aplica a largura padrão aqui */}
                        <p>
                            Venha nos fazer uma visita e conhecer de perto o ambiente acolhedor e inovador que temos a oferecer.
                            Estamos de portas abertas para você e sua família!
                        </p>
                    </div>
                </section>
            </div>
            <Rodape />
        </>

    );
};

export default Sobre;