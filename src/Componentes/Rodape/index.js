import React from 'react';
import './Rodape.css';
import { FaPhone, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Rodape = () => {
  return (
    <footer className="rodape">
      <div className="rodape-container">
        <div className="rodape-item">
          <FaPhone />
          <span>(81) 0000-0000</span>
        </div>
        <div className="rodape-item">
          <FaInstagram />
          <a
            href="https://www.instagram.com/Conectetepe"
            target="_blank"
            rel="noopener noreferrer">
            @Conectetepe
          </a>
        </div>
        <div className="rodape-item">
          <FaWhatsapp />
          <span>(81) 0000-0000</span>
        </div>
        <div className="rodape-item">
          <FaEnvelope />
          <a href="mailto:conect.etepe@gmail.com">
            conect.etepe@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Rodape;
