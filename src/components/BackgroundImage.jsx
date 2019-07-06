import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery } from 'gatsby';
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
  query,
  tag,
  backgroundColor,
}) => (
  <StyledBackgroundImage>
    <StaticQuery
      query={query}
      render={data => {
        // Set ImageData.
        const imageData = data.desktop.childImageSharp.fluid;
        return (
          <GatsbyBackgroundImage
            Tag={tag}
            className={className}
            fluid={imageData}
            backgroundColor={backgroundColor}
          >
            {children}
          </GatsbyBackgroundImage>
        );
      }}
    />
  </StyledBackgroundImage>
);

BackgroundImage.propTypes = {
  tag: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  query: PropTypes.string.isRequired,
};

export default BackgroundImage;
