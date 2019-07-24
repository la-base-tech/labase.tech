import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-color: ${props => props.theme.darkRose};
  color: ${props => props.theme.white};
`;

const Title = styled.h2`
  font-weight: 600;
  font-weight: 800;
  font-size: 2rem;
`;

const Text = styled.p`
  margin-top: 3rem;
  line-height: 1.7;
  margin-bottom: 3rem;
`;

const Action = styled.div`
  background: ${props => props.theme.white2};
  width: 250px;
  height: 250px;
  margin: auto;

  @media (min-width: ${props => props.theme.breakpointTablet}) {
    position: relative;
    width: 100%;
    height: auto;

    &:after {
      content: '';
      display: block;
      padding-bottom: 100%;
    }
  }
`;

const ActionContent = styled.div`
  padding: 1rem;
  align-items: center;
  display: flex;

  @media (min-width: ${props => props.theme.breakpointTablet}) {
    padding: 0.5rem;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media (min-width: ${props => props.theme.breakpointDesktop}) {
    padding: 1rem;
  }
`;

const ActionCount = styled.div`
  font-family: 'CaracasStencilPro', sans-serif;
  color: ${props => props.theme.darkRose};
  font-size: 5em;
  cursor: default;

  @media (min-width: ${props => props.theme.breakpointTablet}) {
    font-size: 3.5em;
  }

  @media (min-width: ${props => props.theme.breakpointDesktop}) {
    font-size: 5em;
  }
`;

const ActionLabel = styled.div`
  color: ${props => props.theme.black};
  font-weight: 600;
  line-height: 2;

  @media (min-width: ${props => props.theme.breakpointTablet}) {
    line-height: 1.1;
  }

  @media (min-width: ${props => props.theme.breakpointDesktop}) {
    line-height: 1.5;
  }
`;

const ActionsSection = () => (
  <Section className="section">
    <div className="container">
      <Title>Nos actions</Title>

      <Text>
        Nous agissons sur le déréglement climatique et l’érosion de la
        biodiversité grace au numérique en accompagnant et en accélérant les
        projets qui proposent des solutions sur ces 4 grands champs d’action.
      </Text>

      <div className="has-text-centered">
        <div className="columns is-tablet">
          <div className="column">
            <Action>
              <ActionContent>
                <div>
                  <ActionCount>1</ActionCount>
                  <ActionLabel>
                    Soutien aux actions de mobilisations citoyennes
                  </ActionLabel>
                </div>
              </ActionContent>
            </Action>
          </div>
          <div className="column">
            <Action>
              <ActionContent>
                <div>
                  <ActionCount>2</ActionCount>
                  <ActionLabel>
                    Sensibilisation au déréglement climatique
                  </ActionLabel>
                </div>
              </ActionContent>
            </Action>
          </div>
          <div className="column">
            <Action>
              <ActionContent>
                <div>
                  <ActionCount>3</ActionCount>
                  <ActionLabel>
                    Préservation des écosystèmes naturels
                  </ActionLabel>
                </div>
              </ActionContent>
            </Action>
          </div>
          <div className="column">
            <Action>
              <ActionContent>
                <div>
                  <ActionCount>4</ActionCount>
                  <ActionLabel>
                    Transition vers une économie décarbonée
                  </ActionLabel>
                </div>
              </ActionContent>
            </Action>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default ActionsSection;
