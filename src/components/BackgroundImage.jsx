import React from 'react';
import PropTypes from 'prop-types';
import GatsbyBackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';

const StyledBackgroundImage = styled.div`
  width: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const BackgroundImage = ({
  className,
  children,
  imageData,
  tag,
  backgroundColor,
}) => (
  <StyledBackgroundImage>
    <GatsbyBackgroundImage
      Tag={tag}
      className={className}
      fluid={imageData}
      backgroundColor={backgroundColor}
    >
      {children}
    </GatsbyBackgroundImage>
  </StyledBackgroundImage>
);

BackgroundImage.propTypes = {
  tag: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  imageData: PropTypes.shape({
    aspectRatio: PropTypes.number.isRequired,
    base64: PropTypes.string.isRequired,
    sizes: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    srcSet: PropTypes.string.isRequired,
    srcSetWebp: PropTypes.string.isRequired,
    srcWebp: PropTypes.string.isRequired,
  }).isRequired,
};

export default BackgroundImage;
