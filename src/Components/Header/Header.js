import React from 'react'
import './Header.css'
import Logo from '../../Assets/logo.svg'
import Menu from '../../Assets/menu-burger.svg'

const Header = () => {
  return (
    <header className='container'>
      <a href="#"> 
        <img src={Logo} alt="Logo" />
      </a>    
      <nav  className='navHeader'>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#about">Sobre</a>
          </li>
        </ul>
      </nav>
      <a id='menu-mobile' href="#">
        <img src={Menu} alt="Menu" />
      </a>
    </header>
  )
}

export default Header