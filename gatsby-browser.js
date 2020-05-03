import './src/styles/app.scss';

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    // eslint-disable-next-line no-unused-expressions
    import(`intersection-observer`);
  }
};
