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

const BackgroundImage = ({ className, children, query }) => (
  <StyledBackgroundImage>
    <StaticQuery
      query={query}
      render={data => {
        // Set ImageData.
        const imageData = data.desktop.childImageSharp.fluid;
        return (
          <GatsbyBackgroundImage
            Tag="section"
            className={className}
            fluid={imageData}
            backgroundColor="#040e18"
          >
            {children}
          </GatsbyBackgroundImage>
        );
      }}
    />
  </StyledBackgroundImage>
);

BackgroundImage.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  query: PropTypes.string.isRequired,
};

export default BackgroundImage;
