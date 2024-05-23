import React from 'react';

import logop from '../assets/img/logop2.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo"><img className='logop' src={logop} alt="" /></a>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to='/' className="nav__link">Home</Link>
            </li>
            <li className="nav__item">
              <a href="/#about" className="nav__link">About</a>
            </li>
            <li className="nav__item">
              <Link to='/discover' className="nav__link">Discover</Link>
            </li>
            <li className="nav__item">
              <Link to="/login" className="nav__link">Login</Link>
            </li>
            <li className="nav__item">
              <Link to='/register' className="nav__link">Register</Link>
            </li>
          </ul>

          

          <i className="ri-close-line nav__close" id="nav-close"></i>
        </div>

        <div className="nav__toggle" id="nav-toggle">
          <i className="ri-function-line"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
