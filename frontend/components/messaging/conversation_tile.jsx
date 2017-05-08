import React from 'react';
import PropTypes from 'prop-types';

const ConversationTile = ({ conversation, displayUser }) => {
  const user = conversation[displayUser].username;
  return (
    <li>
      <span>{conversation.listing.name}</span>
      <strong>{user}</strong>
    </li>
  );
};

ConversationTile.propTypes = {
  conversation: PropTypes.shape({
    listing: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
  displayUser: PropTypes.string.isRequired,
};

export default ConversationTile;
