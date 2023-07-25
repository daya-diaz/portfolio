import React from 'react';
import './Home.css';
import Avatar from '../../Assets/avatar.png'
import Arrow from '../../Assets/arrow-right.svg'
const Home = () => {
  return (
    <div className='container home'>
      <div className="home-avatar-content">
        <img src={Avatar} alt="Avatar" />
      </div>
      <div className='home-text-content'>
        <p>Olá, eu sou a Daya 🤙</p>
        <h1>Desenvolvo <span className='highlighted-text'>ideias</span> e ajudo a construir um mundo melhor através do software.</h1>
      </div>
      <div className="home-buttons-content">
        <a href="#">Contato</a>
        <button className='downloadCV'>Download CV <img src={Arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Home