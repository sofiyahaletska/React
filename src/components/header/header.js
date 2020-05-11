import React from 'react';
import './header.css';

import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className='header-container'>
    <header className='header'>
      <section className='header-title'>
        <span>Free Time Spender</span>
      </section>
      <nav>
        <NavLink exact to="/" activeClassName="selected">Main</NavLink>
        <NavLink to="/improve" activeClassName="selected">Improve</NavLink>
        <NavLink to="/relax" activeClassName="selected">Relax</NavLink>
      </nav>
    </header>
  </div>
);


export default Header;
