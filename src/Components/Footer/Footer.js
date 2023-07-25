import React from 'react'
import './Footer.css'
import LinkedinLink from '../../Assets/linkedin-link.svg';
import Githublink from '../../Assets/github-link.png';
import WhatsappLink from '../../Assets/whatsapp-link.png';
import leftColumn from '../../Assets/footer-left.png';

const Footer = () => {
  return ( 
    <footer className="container" id='footer'>
      <div className="footer-text">
        <div className="title">
          <h1>Tem alguma<br/>ideia?</h1>
          <p>Vamos construí-la juntos!</p>
        </div>
        <div className="socialmedia">
          <a target='_blank' 
            href="https://github.com/daya-diaz" 
            rel="noreferrer">
            <img src={Githublink} alt="Link para ser redirecionado(a) ao meu Github" />
          </a>
          <a target='_blank' 
            href="https://wa.me/558198595825" 
            rel="noreferrer">
            <img src={WhatsappLink} alt="Link para ser redirecionado(a) ao meu WhatsApp" />
          </a>
          <a target='_blank' 
            href="https://www.linkedin.com/in/dayane-santos-melo/" 
            rel="noreferrer">
              <img src={LinkedinLink} alt="Link para ser redirecionado(a) ao meu Linkedin" />
          </a>
        </div> 
      </div>
      <div className="footer-image">
        <img src={leftColumn} alt="Imagem de fundo azul com brands de tecnologias flutuando" />
      </div>
    </footer>
  )
}

export default Footer