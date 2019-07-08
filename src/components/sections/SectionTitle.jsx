import styled from 'styled-components';

const Title = styled.h1`
  text-transform: uppercase;
  color: ${props => props.theme.color3};
  font-size: 1.7rem;

  @media (min-width: ${props => props.theme.breakpointTablet}) {
    font-size: 2rem;
  }
`;

export default Title;
