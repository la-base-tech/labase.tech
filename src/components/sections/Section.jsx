import styled from 'styled-components';
import PropTypes from 'prop-types';

const Section = styled.section`
  padding: 30px;
  background: ${props => (props.even ? props.theme.color2 : 'inherit')};
`;

Section.propTypes = {
  even: PropTypes.bool,
};

Section.defaultProps = {
  even: false,
};

export default Section;
