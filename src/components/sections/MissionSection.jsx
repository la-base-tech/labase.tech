import React from 'react';
import Carousel from 'nuka-carousel';
import Section from './Section';
import SectionTitle from './SectionTitle';
import SectionSubTitle from './SectionSubTitle';
import ProjectTypes from './ProjectTypes';
import Project from './Project';

import ccpmImage from '../../images/projects/ca-commence-par-moi.png';
import coralGuardianImage from '../../images/projects/coral-guardian.png';

const projectTypes = {
  TRANSITION_ECOLOGIQUE: 'Transition écologique',
  BIODIVERSITE: 'Biodiversité',
  MOBILISATION_CITOYENNE: 'Mobilisation citoyenne',
  DECARBONATION: 'Décarbonation',
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

class MissionSection extends React.Component {
  state = {
    projectIndex: 0,
    type: projects[0].type,
  };

  updateType = key => {
    const projectIndex = projects.findIndex(({ type }) => type === key);

    this.setState({
      projectIndex,
      type: projects[projectIndex].type,
    });
  };

  afterSlideCarousel = slideIndex => {
    this.setState({
      projectIndex: slideIndex,
      type: projects[slideIndex].type,
    });
  };

  render() {
    const { type, projectIndex } = this.state;

    return (
      <Section id="section-mission">
        <div className="container">
          <div className="columns">
            <div className="column is-two-thirds">
              <SectionTitle className="title has-text-centered-mobile">
                <span className="is-hidden-mobile">Notre mission</span>
                <span className="is-hidden-tablet">Mission</span>
              </SectionTitle>

              <SectionSubTitle className="has-text-centered-mobile">
                Accélérer les projets qui répondent à l’urgence climatique
              </SectionSubTitle>

              <p className="is-hidden-mobile" style={{ margin: '10px 0' }}>
                Nous dédions énergie et expertise numérique aux projets qui
                apportent des réponses à la crise climatique et aux
                répercussions sociales qu’elle entraine.
              </p>

              <p style={{ margin: '10px 0' }}>
                Les projets accompagnés oeuvrent exclusivement pour :
              </p>

              <ProjectTypes
                types={Object.keys(projectTypes).map(key => {
                  return {
                    key,
                    title: projectTypes[key],
                  };
                })}
                onClickType={this.updateType}
                activeType={type}
              />
            </div>
            <div className="column" style={{ overflow: 'hidden' }}>
              <Carousel
                withoutControls
                initialSlideWidth={320}
                cellSpacing={20}
                wrapAround
                afterSlide={this.afterSlideCarousel}
                slideIndex={projectIndex}
                pauseOnHover
                autoplay
              >
                {projects.map(project => (
                  <Project
                    key={project.title}
                    type={projectTypes[project.type]}
                    image={project.image}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                  />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default MissionSection;
