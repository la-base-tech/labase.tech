import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import SectionTitle from './SectionTitle';
import { ButtonPrimary, ButtonSecondary } from '../Button';

const SectionContent = styled.div`
  margin: 20px 0;
`;

const ButtonProjects = styled.div`
  display: inline-block;
  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 0;
    margin-left: 20px;
  }
`;

const CommunitySection = () => (
  <Section id="section-community" even>
    <div className="container">
      <SectionTitle className="title has-text-centered-mobile">
        <span className="is-hidden-mobile">La communauté</span>
        <span className="is-hidden-tablet">Communauté</span>
      </SectionTitle>

      <h2 className="section-subtitle has-text-centered-mobile">
        Contribuez vous aussi à la transition
      </h2>

      <SectionContent>
        <span className="is-hidden-tablet">
          Rejoindre la communauté <b>la base tech</b>, c’est :
        </span>
        <span className="is-hidden-mobile">
          Développement Web, Product Manager, Designer UX & UI, Marketing
          Digital, toutes les expertises peuvent être mises à profit. Et en
          rejoignant la base tech, vous accédez à :
        </span>
        <br />
        <br />
        Des <b>opportunités de contribution</b> adaptées avec un cadre de
        travail clair
        <br />
        <br />
        Un <b>espace de travail</b> mis à disposition
        <br />
        <br />
        Des <b>événements</b> de formation et de sensibilisation
        <br />
        <br />
        Une <b>mise en contact</b> avec des dizaines de tech’ engagés
      </SectionContent>

      <ButtonPrimary>Nous rejoindre</ButtonPrimary>

      <ButtonProjects>
        <ButtonSecondary color="#000000">
          &gt; Découvrir les projets en cours
        </ButtonSecondary>
      </ButtonProjects>
    </div>
  </Section>
);

export default CommunitySection;
