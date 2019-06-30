import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import GatsbyBackgroundImage from 'gatsby-background-image';
import { ButtonPrimary, ButtonSecondary } from '../Button';

const BackgroundImage = ({ className, children }) => (
  <StaticQuery
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
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid;
      return (
        <GatsbyBackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          {children}
        </GatsbyBackgroundImage>
      );
    }}
  />
);

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 40px;

  @media (min-width: 1024px) {
    font-size: 50px;
    margin-bottom: 30px;
  }
`;

const SubTitle = styled.h2`
  margin-bottom: 40px;
  font-size: 25px;
  font-weight: 600;
`;

const HeaderSection = () => (
  <StyledBackgroundImage
    id="section-header"
    className="hero is-link is-fullheight-with-navbar"
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
              > Rejoindre la communauté
            </ButtonSecondary>
          </div>
          <div className="column"></div>
        </div>
      </div>
    </div>
  </StyledBackgroundImage>
);

export default HeaderSection;
