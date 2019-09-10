import React from 'react';
import PropTypes from 'prop-types';

const Logo = (props) => {
  const { logo } = props;
  return (
    <img alt="logo" src={logo} />
  );
};

Logo.propTypes = {
  logo: PropTypes.string.isRequired,
};

export default Logo;
