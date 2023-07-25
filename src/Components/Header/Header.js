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
      <a href="#">
        <img src={Menu} alt="" />
      </a>
    </header>
  )
}

export default Header