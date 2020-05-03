import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlackHash } from '@fortawesome/free-brands-svg-icons';
import Button from '../Button';

const Title = styled.h2`
  font-weight: 800;
  font-size: 2rem;
`;

const Text = styled.p`
  margin-top: 3rem;

  a {
    color: ${(props) => props.theme.black};
    font-weight: 700;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

const ActionsSection = () => (
  <section className="section" id="joinus">
    <div className="container">
      <Title>Nous rejoindre</Title>
      <Text>
        Tu souhaites t&apos;engager ? Tu portes un projet et tu veux être
        accompagné par la base tech ? Rejoins-nous sur le Slack pour échanger
        avec la communauté. Tu peux aussi nous écrire à{' '}
        <a href="mailto:hello@labase.tech">hello@labase.tech</a> ou
        t&apos;inscrire à notre newsletter pour suivre nos actualités,
        évènements et prochaines actions.
      </Text>

      <ButtonWrapper className="has-text-centered">
        <Button href="https://slackin.labase.tech">
          <FontAwesomeIcon icon={faSlackHash} />
          &nbsp;&nbsp;Discuter sur slack
        </Button>
      </ButtonWrapper>
    </div>
  </section>
);

export default ActionsSection;
