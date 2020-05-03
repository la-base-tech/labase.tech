import React from 'react';
import styled from 'styled-components';

const Logo = styled.span`
  font-family: 'CaracasStencilPro', sans-serif;
  color: ${(props) => props.theme.white};
  cursor: default;
  padding: 0.5rem 0.75rem;

  span {
    color: ${(props) => props.theme.darkRose};
  }
`;

const NavBar = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div
      className="navbar-brand"
      style={{
        fontSize: `${1.5}em`,
      }}
    >
      <Logo className="navbar-item">
        labase<span>.tech</span>
      </Logo>
    </div>
  </nav>
);

export default NavBar;
