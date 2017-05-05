import React from 'react';
import PropTypes from 'prop-types';

const Errors = ({ errorsArray }) => {
  if (!errorsArray) return null;
  const errors = errorsArray.map((error, i) => <li key={`error-${i}`}>{error}</li>);
  return (
    <ul className="errors">
      {errors}
    </ul>
  );
};

Errors.propTypes = {
  errorsArray: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Errors.defaultProps = {
  errorsArray: [],
};

export default Errors;
