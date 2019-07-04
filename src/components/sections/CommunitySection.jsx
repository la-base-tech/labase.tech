import React from 'react';
import styled from 'styled-components';
import { ButtonPrimary, ButtonSecondary } from '../Button';

const Content = styled.p`
  margin: 20px 0;
`;

const ButtonProjects = styled(ButtonSecondary)`
  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 0;
    margin-left: 20px;
  }
`;

const CommunitySection = () => (
  <section id="section-community" className="section section-even">
    <div className="container">
      <h1 className="title section-title has-text-centered-mobile">
        <span className="is-hidden-mobile">La communauté</span>
        <span className="is-hidden-tablet">Communauté</span>
      </h1>

      <h2 className="section-subtitle has-text-centered-mobile">
        Contribuez vous aussi à la transition
      </h2>

      <Content>
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
      </Content>

      <ButtonPrimary>Nous rejoindre</ButtonPrimary>

      <ButtonProjects color="#000000">
        &gt; Découvrir les projets en cours
      </ButtonProjects>
    </div>
  </section>
);

export default CommunitySection;
