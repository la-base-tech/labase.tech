import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSlackHash,
  faGithubSquare,
} from '@fortawesome/free-brands-svg-icons';

const Wrapper = styled.footer`
  background: #000000;
  padding: 1rem;
  color: #ffffff;
`;

const Logo = styled.div`
  font-family: 'CaracasStencilPro', sans-serif;
  color: ${(props) => props.theme.white};
  cursor: default;
  font-size: 2rem;
  margin-bottom: 1rem;

  span {
    color: ${(props) => props.theme.darkRose};
  }

  @media (min-width: ${(props) => props.theme.breakpointTablet}) {
    font-size: 2rem;
  }
`;

const IconLinks = styled.div`
  margin-bottom: 1rem;
`;

const IconLink = styled.a`
  color: ${(props) => props.theme.white};
  font-size: 2em;
  &:not(:last-child) {
    margin-right: 1rem;
  }

  &:hover {
    color: ${(props) => props.theme.darkRose};
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

      <IconLinks>
        <IconLink
          title="Retrouvez-nous sur Slack"
          href="https://slackin.labase.tech"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faSlackHash} />
        </IconLink>
        <IconLink
          title="Retrouvez-nous sur Github"
          href="https://github.com/la-base-tech"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithubSquare} />
        </IconLink>
      </IconLinks>

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
