import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Wrapper = styled.div`
  width: 50%;
  display: flex;
  padding: 5px 0;
  cursor: pointer;
  align-items: center;
  flex-wrap: nowrap;

  @media (min-width: ${props => props.theme.breakpointTablet}) {
    padding: 5px;
  }
`;

const Border = styled.div`
  display: flex;
  flex: 0 0 10px; /* can't grow, can't shrink, fixed at 10px */
  height: 50px;
  background: ${props => props.theme.color3};
  border-radius: 3px;
  transition: background 0.2s ease;

  ${Wrapper}:hover &,
  ${Wrapper}.is-active & {
    background: ${props => props.theme.color4};
  }

  @media (min-width: ${props => props.theme.breakpointTablet}) {
    flex: 0 0 15px;
  }
`;

const Label = styled.div`
  display: flex;
  font-size: 12px;
  padding-left: 10px;
  font-weight: 600;

  ${Wrapper}:hover &,
  ${Wrapper}.is-active & {
    color: ${props => props.theme.color4};
  }

  @media (min-width: ${props => props.theme.breakpointTablet}) {
    font-size: 14px;
    padding-left: 20px;
  }
`;

const ProjectType = ({ children, isActive, handleClick }) => {
  let className = '';
  if (isActive) {
    className = 'is-active';
  }

  return (
    <Wrapper className={className} onClick={handleClick}>
      <Border />
      <Label>{children}</Label>
    </Wrapper>
  );
};

ProjectType.propTypes = {
  isActive: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
};

const ProjectTypes = ({ className, types, onClickType, activeType }) => (
  <Container className={className}>
    {types.map(({ key, title }) => (
      <ProjectType
        isActive={key === activeType}
        key={key}
        handleClick={() => onClickType(key)}
      >
        {title}
      </ProjectType>
    ))}
  </Container>
);

ProjectTypes.propTypes = {
  className: PropTypes.string,
  types: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClickType: PropTypes.func.isRequired,
  activeType: PropTypes.string.isRequired,
};

ProjectTypes.defaultProps = {
  className: '',
};

export default ProjectTypes;
