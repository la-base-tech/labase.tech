import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProjetTypeWrapper = styled.div`
  width: 50%;
  display: flex;
  padding: 5px 0;
  cursor: pointer;
  align-items: center;
  flex-wrap: nowrap;

  @media (min-width: 768px) {
    padding: 5px;
  }
`;

const ProjetTypeBorder = styled.div`
  display: flex;
  flex: 0 0 10px; /* can't grow, can't shrink, fixed at 10px */
  height: 50px;
  background: #c3b8da;
  border-radius: 3px;
  transition: background 0.2s ease;

  ${ProjetTypeWrapper}:hover &,
  ${ProjetTypeWrapper}.is-active & {
    background: #2f1661;
  }

  @media (min-width: 768px) {
    flex: 0 0 15px;
  }
`;

const ProjetTypeLabel = styled.div`
  display: flex;
  font-size: 12px;
  padding-left: 10px;
  font-weight: 600;

  ${ProjetTypeWrapper}:hover &,
  ${ProjetTypeWrapper}.is-active & {
    color: #2f1661;
  }

  @media (min-width: 768px) {
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
    <ProjetTypeWrapper className={className} onClick={handleClick}>
      <ProjetTypeBorder />
      <ProjetTypeLabel>{children}</ProjetTypeLabel>
    </ProjetTypeWrapper>
  );
};

ProjectType.propTypes = {
  isActive: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
};

const ProjectTypes = ({ className, types, onClickType, activeType }) => (
  <div className={className}>
    {types.map(({ key, title }) => (
      <ProjectType
        isActive={key === activeType}
        key={key}
        handleClick={() => onClickType(key)}
      >
        {title}
      </ProjectType>
    ))}
  </div>
);

ProjectTypes.propTypes = {
  className: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClickType: PropTypes.func.isRequired,
  activeType: PropTypes.string.isRequired,
};

const StyledProjectTypes = styled(ProjectTypes)`
  display: flex;
  flex-wrap: wrap;
`;

export default StyledProjectTypes;
