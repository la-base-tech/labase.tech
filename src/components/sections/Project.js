import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ButtonSecondary } from '../Button';

const Container = styled.div`
  background: #f5f5f5;
  border-radius: 7px;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  padding: 30px;
`;

const Title = styled.h3`
  font-weight: bold;
  font-size: 16px;
  cursor: default;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

const Type = styled.div`
  font-size: 13px;
  display: inline-block;
  background: #2f1661;
  padding: 5px 10px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin: 30px 0;
  cursor: default;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

const Description = styled.p`
  cursor: default;
`;

const ButtonSecondaryStyled = styled(ButtonSecondary)`
  margin-top: 20px;
`;

const Project = ({ types, data }) => {
  const type = types[data.type];

  return (
    <Container>
      <img src={data.image} alt={data.title} />
      <ContentWrapper>
        <Title>{data.title}</Title>
        <Type>{type}</Type>
        <Description dangerouslySetInnerHTML={{ __html: data.description }} />

        <ButtonSecondaryStyled href={data.link} color="#2f1661">
          > Voir le projet
        </ButtonSecondaryStyled>
      </ContentWrapper>
    </Container>
  );
};

Project.propTypes = {
  types: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default Project;
