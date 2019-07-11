import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import logoImage from '../images/logo.png';

const Container = styled.a`
  color: ${props => props.theme.color1};
  font-weight: bold;

  &:hover {
    color: ${props => props.theme.color1} !important;
  }

  span {
    margin-top: 4px;
  }
`;

const Logo = ({ className }) => {
  return (
    <Container className={className} href="">
      <img src={logoImage} alt="Logo labase.tech" />
      <span>.tech</span>
    </Container>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
};

Logo.defaultProps = {
  className: '',
};

export default Logo;
