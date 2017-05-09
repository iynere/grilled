import React from 'react';
import PropTypes from 'prop-types';

const MessageTile = ({ age, body, user }) => {
  return (
    <li>
      <strong>{user}</strong>
      <p>{body}</p>
      <span>{age} Ago</span>
    </li>
  );
};

MessageTile.propTypes = {
  user: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
};

export default MessageTile;
