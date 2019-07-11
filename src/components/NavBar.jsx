import React from 'react';
import Logo from './Logo';

const NavBar = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
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
