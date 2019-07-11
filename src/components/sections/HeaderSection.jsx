import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { ButtonPrimary, ButtonSecondary } from '../Button';
import BackgroundImage from '../BackgroundImage';

const Title = styled.h1`
  color: #fff;
  font-size: 40px;
  line-height: 50px;
  font-weight: bold;
  margin-bottom: 40px;

  @media (min-width: ${props => props.theme.breakpointTablet}) {
    font-size: 50px;
    line-height: 55px;
    margin-bottom: 30px;
  }
`;

const SubTitle = styled.h2`
  color: #fff;
  margin-bottom: 40px;
  font-size: 25px;
  font-weight: 600;
`;

const ButtonSecondaryStyled = styled(ButtonSecondary)`
  margin-top: 20px;

  @media (min-width: ${props => props.theme.breakpointTablet}) {
    margin-top: 0;
    margin-left: 20px;
  }
`;

const HeaderSection = () => (
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
      const imageData = data.desktop.childImageSharp.fluid;
      return (
        <BackgroundImage
          tag="section"
          id="section-header"
          className="hero is-fullheight-with-navbar"
          backgroundColor="#FFFFFF"
          imageData={imageData}
        >
          <div className="hero-body">
            <div className="container">
              <Title>
                Un cortège de solutions
                <br />
                pour un espoir climatique
              </Title>

              <SubTitle className="is-hidden-mobile">
                Donnez vie ou accélérez vos projets grâce à un{' '}
                <b>accompagnement adapté</b> et une <b>communauté d’experts</b>{' '}
                du numérique.
              </SubTitle>

              <ButtonPrimary href="#section-offer">
                Notre accompagnement
              </ButtonPrimary>

              <br className="is-hidden-tablet" />

              <ButtonSecondaryStyled href="#section-community" color="#FFFFFF">
                &gt; Rejoindre la communauté
              </ButtonSecondaryStyled>
            </div>
          </div>
        </BackgroundImage>
      );
    }}
  />
);

export default HeaderSection;
