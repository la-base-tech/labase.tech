import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

const Logo = styled.div`
  font-family: 'CaracasStencilPro', sans-serif;
  color: ${props => props.theme.black};
  cursor: default;
  font-size: 3.2rem;
  margin-bottom: 50px;

  span {
    color: ${props => props.theme.darkRose};
  }

  @media (min-width: ${props => props.theme.breakpointTablet}) {
    font-size: 5rem;
    margin-bottom: 50px;
  }
`;

const Catchline = styled.div`
  color: ${props => props.theme.darkRose};
  line-height: 1;
  font-size: 1.6rem;
  font-weight: 800;
  margin-bottom: 50px;

  @media (min-width: ${props => props.theme.breakpointTablet}) {
    font-size: 3.2rem;
    font-weight: 700;
    margin-bottom: 100px;
  }
`;

const SubCatchline = styled.div`
  margin-top: 50px;
  color: ${props => props.theme.black};
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.2;

  @media (min-width: ${props => props.theme.breakpointTablet}) {
    margin-top: 100px;
    font-size: 2.2rem;
  }
`;

const Description = styled.div`
  margin-top: 50px;
  color: ${props => props.theme.black};
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.78;

  span {
    font-family: 'CaracasStencilPro', sans-serif;
    color: ${props => props.theme.darkRose};
  }

  @media (min-width: ${props => props.theme.breakpointTablet}) {
    font-size: 1.2rem;
  }
`;

const HeaderSection = () => {
  function scrollToJoinUs(e) {
    e.preventDefault();
    const el = document.querySelector('#joinus');
    el.scrollIntoView({
      behavior: 'smooth',
    });
  }

  return (
    <section className="hero is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container has-text-centered">
          <Logo>
            labase<span>.tech</span>
          </Logo>

          <Catchline>La communauté tech engagée pour le climat</Catchline>

          <Button href="#joinus" onClick={scrollToJoinUs}>
            Nous rejoindre
          </Button>

          <SubCatchline>
            Rassembler les énergies du numérique pour accélérer la transition
            écologique
          </SubCatchline>

          <Description>
            <span>labase.tech</span> fédère les compétences tech et les porteurs
            de projets au sein d’une communauté qui agit pour la justice sociale
            et climatique.
          </Description>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
