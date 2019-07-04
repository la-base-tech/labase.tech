import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import logoImage from '../images/logo.png';

const LogoStyled = styled.a`
  color: #e30e9d;
  font-weight: bold;

  &:hover {
    color: #e30e9d !important;
  }
`;

const Logo = ({ className }) => {
  return (
    <LogoStyled className={className} href="">
      <img src={logoImage} alt="Logo labase.tech" />
      <span>.tech</span>
    </LogoStyled>
  );
};

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Logo;