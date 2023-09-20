import PropTypes from 'prop-types';
import styled from 'styled-components';

const Heading = styled.h1`
  color: rgb(35 154 59/var(--tw-text-opacity)) !important;
  --tw-text-opacity: 3 !important;
  line-height: 2.5rem;
  font-size: 2.25rem;
  font-weight: 700;
  letter-spacing: .05em;
  font-size: ${(props) =>
    props.headingClass
      ? props.theme.fonts[`fontSize${props.headingClass.toUpperCase()}`]
      : props.theme.fonts.fontSizeH1};

  text-align: ${(props) => (props.textCentered ? 'center' : 'left')};

  @media screen and (max-width: 1024px) {
    text-align: ${(props) =>
      props.textCenteredOnMobile || props.textCentered ? 'center' : 'left'};
  }
`;

Heading.propTypes = {
  headingClass: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  textCentered: PropTypes.bool,
  textCenteredOnMobile: PropTypes.bool,
};

Heading.defaultProps = {
  textCentered: false,
  textCenteredOnMobile: false,
};

export default Heading;
