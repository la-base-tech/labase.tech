import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const Wrapper = styled.footer`
  background: #000000;
  padding: 30px;
  color: #ffffff;
`;

const Text1 = styled.p`
  margin-bottom: 30px;
  font-size: 1em;
  line-height: 1em;
  font-weight: bold;

  img {
    height: 1rem;
    vertical-align: text-top;
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
      <Text1>
        <Logo fontSize="1" /> est le point de départ de vos projets pour un
        espoir climatique
      </Text1>
      <Text2>
        Sous le haut patronage de{' '}
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
