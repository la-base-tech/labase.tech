import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';

import NavBar from '../components/NavBar';
import HeaderSection from '../components/sections/HeaderSection';
import MissionSection from '../components/sections/MissionSection';
import ActionsSection from '../components/sections/ActionsSection';
import OfferSection from '../components/sections/OfferSection';
import CommunitySection from '../components/sections/CommunitySection';
import Footer from '../components/Footer';

// TODO: fix sass export variables on build
// import theme from '../styles/theme.scss';
const theme = {
  color1: '#e30e9d',
  color2: '#fbeffc',
  color3: '#c3b8da',
  color4: '#2f1661',
  color5: '#f5f5f5',
  breakpointTablet: '769px',
  breakpointDesktop: '1024px',
  breakpointWidescreen: '1216px',
  breakpointFullhd: '1408px',
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

const IndexPage = ({ data }) => (
  <ThemeProvider theme={theme}>
    <>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
      </Helmet>

      <NavBar />

      <HeaderSection />
      <MissionSection />
      <ActionsSection />
      <OfferSection />
      <CommunitySection />

      <Footer />
    </>
  </ThemeProvider>
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default IndexPage;
