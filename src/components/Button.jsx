import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonStyled = styled.a`
  font-weight: bold;
  border-radius: 50px;
  font-size: 1.2rem;
  border-width: 2px;
  padding: 30px 60px;

  &:hover {
    background-color: transparent !important;
    color: ${props => props.theme.darkRose} !important;
    border: 2px solid ${props => props.theme.darkRose} !important;
  }

  @media (min-width: ${props => props.theme.breakpointTablet}) {
    padding: 30px 60px;
  }
`;

const Button = ({ className, children, href, onClick }) => {
  const opts = {
    className: `${className} button is-primary`,
    href,
    onClick,
  };

  if (href && href.indexOf('http') === 0) {
    opts.target = '_blank';
    opts.rel = 'noopener noreferrer';
  }

  return <ButtonStyled {...opts}>{children}</ButtonStyled>;
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: '',
  href: null,
  onClick: null,
};

export default Button;
