import React from 'react';
import PropTypes from 'prop-types';

const MessageTile = ({ age, body, user }) => (
  <li>
    <strong>{user}</strong>
    <p>{body}</p>
    <span>{age} Ago</span>
  </li>
);

MessageTile.propTypes = {
  user: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  age: PropTypes.string,
};

MessageTile.defaultProps = {
  age: 'A few moments',
};

export default MessageTile;
