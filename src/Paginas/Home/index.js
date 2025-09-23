import Navbar from "../../Componentes/Navbar";
import Rodape from "../../Componentes/Rodape";
import ModPesquisa from "../../Componentes/ModPesquisa";
import "./Home.css";
import "../Projeto/index";

import img1 from "../../imagens/1.png";
import img2 from "../../imagens/2.png";
import img3 from "../../imagens/3.png";
import img4 from "../../imagens/4.png";
import img5 from "../../imagens/5.png";
import img6 from "../../imagens/6.png";
import img7 from "../../imagens/7.png";
import img8 from "../../imagens/8.png";
import img9 from "../../imagens/9.png";
import img10 from "../../imagens/10.png";
import img11 from "../../imagens/11.png";

import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Search } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";


function Home () {

  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
  };

  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/api/hello")
      .then((response) => setMessage(response.data.message))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Navbar/>

      <body>
        <div id="paragrafo" style={{padding:'30px 0 30px 0', backgroundColor: '#0a3dbf', color:'white'}}>
          <div className="container" style={{backgroundColor: '#0a3dbf'}}>
            <div className="row justify-content center">
              <h2 style={{marginBottom:'25px', textAlign:'center'}}>Todos os projetos integrados das ETE's conectados em um só Lugar</h2>
              <p style={{textAlign:'center', color:"white"}}>
                O Repositório conect ETE PE é uma base de dados online que objetiva reunir, de forma organizada e acessível, a produção científica e documental das ETE'S de toda RMR com o intuito de torná-la acessível aos pesquisadores e ao grande público nacional e internacional.
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div id="projetos_destaque">
            <h4>Projetos em destaques {message} <i className="bi bi-star-fill"></i></h4>
          </div>

          <div className="row text-center">
            {[{img: img1, title: "Scoop"}, {img: img2, title: "Market delivery"}, {img: img3, title: "Portal T.E.A"}].map((projeto, i) => (
              <div className="col-lg-4 col-md-12 col-sm-12" key={i}>
                <div onClick={() => navigate('/Projeto')} style={{cursor: 'pointer', textDecoration: 'none', margin: '0', padding: '0'}}>
                  <img src={projeto.img} className="img-fluid img_projeto_destaque" style={{height:'220px', width:'100%'}} alt={projeto.title} />
                  <h4 id="hazul" className="pt-3">{projeto.title}</h4>
                </div>
              </div>
            ))}
          </div>

                  <ModPesquisa/>

          <div id="projetos_destaque" style={{margin:'0', padding:'0 0 30px 0'}}>
            <h4>Projetos recentes</h4>
          </div>

          <div className="row text-center">
            {[img4, img5, img6, img7, img8, img9, img10, img11].map((img, i) => (
              <div className="col-lg-3 col-md-6 col-sm-12" key={i}>
                <div onClick={() => navigate('/Projeto')} style={{cursor: 'pointer', textDecoration: 'none', margin: '0', padding: '0'}}>
                  <img src={img} className="img-fluid img_projeto_destaque" style={{height:'220px', width:'100%'}} alt={`Projeto ${i + 4}`} />
                  <h4 id="hazul" className="pt-2">Projeto {i + 4}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      

      <Rodape/>
      
      </body>
      
    </>
  
  );
}

export default Home;
