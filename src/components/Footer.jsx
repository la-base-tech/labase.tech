import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  background: #000000;
  padding: 1rem;
  color: #ffffff;
`;

const Logo = styled.div`
  font-family: 'CaracasStencilPro', sans-serif;
  color: ${props => props.theme.white};
  cursor: default;
  font-size: 2rem;
  margin-bottom: 1rem;

  span {
    color: ${props => props.theme.darkRose};
  }

  @media (min-width: ${props => props.theme.breakpointTablet}) {
    font-size: 2rem;
  }
`;

const Text2 = styled.p`
  font-size: 13px;

  > a {
    text-decoration: underline;
    color: #ffffff;
  }
`;

const Footer = () => (
  <Wrapper className="footer">
    <div className="content has-text-centered">
      <Logo>
        labase<span>.tech</span>
      </Logo>

      <Text2>
        Avec{' '}
        <a
          href="https://labase.paris"
          target="_blank"
          rel="noopener noreferrer"
        >
          labase.paris
        </a>
        , le lieu de la mobilisation climatique et sociale
      </Text2>
    </div>
  </Wrapper>
);

export default Footer;
