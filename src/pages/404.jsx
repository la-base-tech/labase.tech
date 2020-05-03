import React from 'react';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Button from '../components/Button';

import theme from '../utils/theme';

const Page404 = styled.div`
  font-family: 'CaracasStencilPro', sans-serif;
  color: ${(props) => props.theme.black};
  cursor: default;
  font-size: 3.2rem;
  margin-bottom: 50px;

  span {
    color: ${(props) => props.theme.darkRose};
  }

  @media (min-width: ${(props) => props.theme.breakpointTablet}) {
    font-size: 5rem;
    margin-bottom: 50px;
  }
`;

const NotFoundPage = () => (
  <ThemeProvider theme={theme}>
    <>
      <Helmet>
        <title>la base tech - page 404</title>
      </Helmet>
      <NavBar />

      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container has-text-centered">
            <Page404>
              page<span>404</span>
            </Page404>
            <div style={{ margin: '3rem 0' }}>
              la page demandée n’existe pas
            </div>
            <Button href="/">Page d’accueil</Button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  </ThemeProvider>
);

export default NotFoundPage;
