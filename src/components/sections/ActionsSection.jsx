import React from 'react';
import styled from 'styled-components';

const ColumnTitle = styled.h2`
  margin-bottom: 30px;
  font-size: 25px;
  font-weight: 600;
`;

const ActionsSection = () => (
  <section id="section-actions" className="section section-even">
    <div className="container">
      <h1 className="title section-title has-text-centered-mobile">
        <span className="is-hidden-mobile">Nos actions</span>
        <span className="is-hidden-tablet">Actions</span>
      </h1>
      <div className="columns has-text-centered-mobile">
        <div className="column">
          <ColumnTitle>Accompagnement</ColumnTitle>

          <p>
            Nous <b>accompagnons</b> les acteurs engagés pour la transition sur
            toutes leurs problématiques tech’
          </p>
        </div>
        <div className="column">
          <ColumnTitle>Communauté</ColumnTitle>

          <p>
            Nous <b>fédérons</b> les tech’ qui souhaitent s’engager et leur
            mettons à disposition des projets concrets
          </p>
        </div>
        <div className="column">
          <ColumnTitle>Incubation</ColumnTitle>

          <p>
            Nous <b>faisons</b> émerger des projets qui répondent à la crise
            climatique
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ActionsSection;
