import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonPrimaryStyled = styled.a`
  font-weight: bold;

  @media (min-width: ${props => props.theme.breakpointTablet}) {
    text-transform: uppercase;
    padding: 25px 30px;
  }
`;

const ButtonPrimary = ({ className, children, href }) => {
  const opts = {
    className: `${className} button is-primary`,
    href,
  };

  if (href && href.substr(0, 1) !== '#') {
    opts.target = '_blank';
    opts.rel = 'noopener';
  }

  return <ButtonPrimaryStyled {...opts}>{children}</ButtonPrimaryStyled>;
};

ButtonPrimary.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
};

ButtonPrimary.defaultProps = {
  className: '',
  href: null,
};

const ButtonSecondaryStyled = styled.a`
  color: ${props => props.color || 'white'};
  background-color: transparent;
  border-color: transparent;
  font-weight: bold;

  :hover {
    color: ${props => props.color || 'white'};
    border-color: transparent;
    text-decoration: underline;
  }
  @media (min-width: ${props => props.theme.breakpointTablet}) {
    padding: 25px 30px;
  }
`;

const ButtonSecondary = ({ className, children, color, href }) => {
  const opts = {
    className: `${className} button`,
    href,
    color,
  };

  if (href && href.substr(0, 1) !== '#') {
    opts.target = '_blank';
    opts.rel = 'noopener noreferrer';
  }

  return <ButtonSecondaryStyled {...opts}>{children}</ButtonSecondaryStyled>;
};

ButtonSecondary.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  color: PropTypes.string.isRequired,
};

ButtonSecondary.defaultProps = {
  className: '',
  href: null,
};

export { ButtonPrimary, ButtonSecondary };
