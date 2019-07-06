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

const ButtonWrapper = styled.div`
  margin-top: 20px;
`;

const Project = ({ type, image, title, description, link }) => {
  return (
    <Container>
      <img src={image} alt={title} />
      <ContentWrapper>
        <Title>{title}</Title>
        <Type>{type}</Type>
        <Description dangerouslySetInnerHTML={{ __html: description }} />

        <ButtonWrapper>
          <ButtonSecondary href={link} color="#2f1661">
            &gt; Voir le projet
          </ButtonSecondary>
        </ButtonWrapper>
      </ContentWrapper>
    </Container>
  );
};

Project.propTypes = {
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Project;
