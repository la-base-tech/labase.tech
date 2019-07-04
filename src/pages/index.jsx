import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import NavBar from '../components/NavBar';
import HeaderSection from '../components/sections/HeaderSection';
import MissionSection from '../components/sections/MissionSection';
import ActionsSection from '../components/sections/ActionsSection';
import OfferSection from '../components/sections/OfferSection';
import CommunitySection from '../components/sections/CommunitySection';
import Footer from '../components/Footer';

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