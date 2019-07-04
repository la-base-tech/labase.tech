import React from 'react';
import Helmet from 'react-helmet';
import Logo from './Logo';

const NavBar = () => (
  <nav
    className="navbar is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <Helmet
      bodyAttributes={{
        class: 'has-navbar-fixed-top',
      }}
    />
    <div
      className="navbar-brand"
      style={{
        fontSize: `${1.5}em`,
      }}
    >
      <Logo className="navbar-item" fontSize="1.5" />
    </div>
  </nav>
);

export default NavBar;
