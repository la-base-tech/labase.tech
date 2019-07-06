import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { ButtonPrimary, ButtonSecondary } from '../Button';
import BackgroundImage from '../BackgroundImage';

const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 40px;

  @media (min-width: 1024px) {
    font-size: 50px;
    margin-bottom: 30px;
  }
`;

const SubTitle = styled.h2`
  color: #fff;
  margin-bottom: 40px;
  font-size: 25px;
  font-weight: 600;
`;

const HeaderSection = () => (
  <BackgroundImage
    tag="section"
    id="section-header"
    className="hero is-fullheight-with-navbar"
    backgroundColor="#FFFFFF"
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "header-background.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
  >
    <div className="hero-body">
      <div className="container">
        <Title>
          <span className="is-hidden-mobile">
            Le point de départ de vos projets pour un espoir climatique
          </span>
          <span className="is-hidden-tablet">
            Au départ de vos projets pour un espoir climatique
          </span>
        </Title>

        <SubTitle className="is-hidden-mobile">
          Donnez vie ou accélérez vos projets grâce à un{' '}
          <b>accompagnement adapté</b> et une <b>communauté d’experts</b> du
          numérique.
        </SubTitle>

        <div className="columns">
          <div className="column">
            <ButtonPrimary href="#section-offer">
              Notre accompagnement
            </ButtonPrimary>
          </div>
          <div className="column">
            <ButtonSecondary href="#section-community" color="#FFFFFF">
              &gt; Rejoindre la communauté
            </ButtonSecondary>
          </div>
          <div className="column" />
        </div>
      </div>
    </div>
  </BackgroundImage>
);

export default HeaderSection;
