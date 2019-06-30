import React from 'react';
import styled from 'styled-components';
import ProjectTypes from './ProjectTypes';
import Project from './Project';

import ccpmImage from '../../images/projects/ca-commence-par-moi.png';
import coralGuardianImage from '../../images/projects/coral-guardian.png';

const projectTypes = {
  DECARBONATION: 'Décarbonation',
  MOBILISATION_CITOYENNE: 'Mobilisation citoyenne',
  TRANSITION_ECOLOGIQUE: 'Transition écologique',
  BIODIVERSITE: 'Biodiversité',
};

const projects = [
  {
    image: ccpmImage,
    title: 'Ca Commence par Moi',
    type: 'TRANSITION_ECOLOGIQUE',
    description:
      'La première communauté d’acteurs éco-citoyens de France, en transition vers un mode de vie plus frugal, durable et positif.<br><br> > <span style="color:#2f1661;">+100,000 membres</span> prêt à faire évoluer leur mode de vie',
    link: 'https://www.cacommenceparmoi.org/',
  },
  {
    image: coralGuardianImage,
    title: 'Coral Guardian',
    type: 'BIODIVERSITE',
    description:
      'Coral Guardian travaille à la protection et la restauration des écosystèmes coraliens, en lien étroit avec les communautés locales.',
    link: 'https://coralguardian.org',
  },
  {
    image: coralGuardianImage,
    title: 'Alternatiba',
    type: 'MOBILISATION_CITOYENNE',
    description:
      "Alternatiba est un mouvement de mobilisation citoyenne contre le réchauffement climatique par la promotion d'initiatives alternatives.",
    link: 'https://alternatiba.eu',
  },
  {
    image: coralGuardianImage,
    title: 'Follow This',
    type: 'DECARBONATION',
    description:
      'Follow This accroît la pression sur les Majors pétrolières pour leur faire adopter des stratégies bas-carbone, au travers de leur actionnariat.',
    link: 'https://follow-this.org',
  },
];

const Text = styled.p`
  margin: 10px 0;
`;

const initialType = Object.keys(projectTypes)[0];

class MissionSection extends React.Component {
  state = {
    type: initialType,
    project: this.getProject(initialType),
  };

  getProject(key) {
    return projects.find(({ type }) => type === key);
  }

  updateType = key => {
    this.setState({
      type: key,
      project: this.getProject(key),
    });
  };

  render() {
    return (
      <section id="section-mission" className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-two-thirds">
              <h1 className="title section-title has-text-centered-mobile">
                <span className="is-hidden-mobile">Notre mission</span>
                <span className="is-hidden-tablet">Mission</span>
              </h1>

              <h2 className="section-subtitle has-text-centered-mobile  ">
                Accélérer les projets qui répondent à l’urgence climatique
              </h2>

              <Text className="is-hidden-mobile">
                Nous dédions énergie et expertise numérique aux projets qui
                apportent des réponses à la crise climatique et aux
                répercussions sociales qu’elle entraine.
              </Text>

              <Text>Les projets accompagnés oeuvrent exclusivement pour :</Text>

              <ProjectTypes
                types={projectTypes}
                onClickType={this.updateType}
                activeType={this.state.type}
              />
            </div>
            <div className="column">
              <Project types={projectTypes} data={this.state.project} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MissionSection;
