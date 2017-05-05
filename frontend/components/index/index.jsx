import React from 'react';
import PropTypes from 'prop-types';
import AuthForm from './auth_form_container';

const Index = ({ currentUser }) => {
  if (currentUser !== null) {
    return (
      <h1>yolo</h1>
    );
  }
  return (
    <AuthForm />
  );
};

Index.propTypes = {
  currentUser: PropTypes.shape({
    username: PropTypes.string,
    id: PropTypes.number,
  }),
};

Index.defaultProps = {
  currentUser: null,
};

export default Index;
