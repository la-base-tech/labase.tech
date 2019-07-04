import React from 'react';
import styled from 'styled-components';
import { ButtonPrimary } from '../Button';

const Title = styled.h1`
  margin-bottom: 30px !important;
`;

const ColumnTitle = styled.h2`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 30px;
`;

const OfferWrapper = styled.div`
  padding: 30px;
  background: #fbeffc;
  color: #2f1661;

  ul {
    margin-bottom: 30px;
  }

  .price {
    display: inline-block;
    border-top: 5px solid #2f1661;
    padding-top: 30px;
    font-weight: 600;
    font-size: 0.9em;

    @media (min-width: 768px) {
      padding: 30px 50px 0 0;
      font-size: 1em;
    }
  }
`;

const SkillsWrapper = styled.div`
  padding: 30px;

  ul {
    margin-top: 10px;
    margin-bottom: 30px;
  }

  li {
    padding: 10px 20px;
    border: 1px solid #2f1661;
    text-transform: uppercase;
    display: inline-block;
    margin-top: 20px;
    margin-right: 20px;
    font-weight: bold;
    font-size: 0.7em;
    color: #2f1661;
    cursor: default;

    @media (min-width: 768px) {
      font-size: 1em;
    }
  }
`;

const OfferSection = () => (
  <section id="section-offer" className="section">
    <div className="container">
      <Title className="title section-title has-text-centered-mobile">
        <span className="is-hidden-mobile">Notre offre</span>
        <span className="is-hidden-tablet">Offre</span>
      </Title>

      <div className="columns">
        <OfferWrapper className="column">
          <ColumnTitle>Pour chaque projet</ColumnTitle>

          <ul className="is-hidden-mobile">
            <li>
              + Aide à la définition des besoins & de <b>votre roadmap</b>
            </li>
            <li>
              + <b>Suivi de votre projet</b> sur le long-terme
            </li>
            <li>
              + <b>Encadrement</b> de vos bénévoles aux compétences numériques
            </li>
            <li>
              + Accès à <b>notre communauté</b> de bénévoles
            </li>
            <li>
              + <b>8 jours</b> homme adaptés à vos besoins
            </li>
          </ul>

          <ul className="is-hidden-tablet">
            <li>
              + Définition des besoins & <b>roadmap</b>
            </li>
            <li>
              + <b>Encadrement</b> de vos bénévoles aux compétences numériques &
              accès à notre communauté
            </li>
            <li>
              + <b>8 jours</b> homme adaptés à vos besoins
            </li>
          </ul>

          <div className="price">à partir de 2,000€ HT/mois</div>
        </OfferWrapper>
        <SkillsWrapper className="column">
          <ColumnTitle>Accompagnement</ColumnTitle>

          <p>
            Nous couvrons <b>les besoins numériques</b> des acteurs engagés pour
            le climat au travers d’un abonnement mensuel.
            <br />
            <br />
            Nous couvrons les champs d&apos;expertises suivantes :
          </p>

          <ul>
            <li>Développement</li>
            <li>UX Design</li>
            <li>Automatisation</li>
            <li>Sécurité</li>
            <li>Data</li>
          </ul>

          <ButtonPrimary>Nous contacter</ButtonPrimary>
        </SkillsWrapper>
      </div>
    </div>
  </section>
);

export default OfferSection;
