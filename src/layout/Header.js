import React, { useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';

const Header = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  let fixHeader = () => (pathname === '/' ? 'fixed' : '');

  return (
    <header className={`header ${fixHeader()}`}>
      <p className='header__openMenu' onClick={toggleMenu}>
        &#9776;
      </p>
      <div className={`header__menu ${isOpen && 'open'}`}>
        <p className='header__closeMenu' onClick={toggleMenu}>
          &times;
        </p>
        <div onClick={toggleMenu}>
          <nav>
            <NavLink to=''>Home</NavLink>
            <NavLink to='chi_siamo'>Chi Siamo</NavLink>
            <NavLink to='valori'>I Nostri Valori</NavLink>
            <NavLink to='programma'>Il Nostro Programma</NavLink>
            <NavLink to='collabora'>Collabora</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
