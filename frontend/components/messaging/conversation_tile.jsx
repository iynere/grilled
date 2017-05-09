import React from 'react';
import PropTypes from 'prop-types';

const ConversationTile = ({ conversation, displayUser, toggleConversation, active }) => {
  const user = conversation[displayUser].username;
  const offerContent = () => (
    <section>
      <span>Offer: ${25}</span>
      <button className="btn btn-square">Accept</button>
      <button className="btn btn-square">Counter</button>
    </section>
  );
  const tileContents = () => {
    if (active === conversation.id) {
      return (
        <div>
          {conversation.offer > 0 ? offerContent() : null}
          <button className="btn btn-square">REPLY</button>
        </div>
      );
    }
    return (
      <strong>{user}</strong>
    );
  };
  return (
    <li>
      <button onClick={() => toggleConversation(conversation.id)}>
        <span>{conversation.listing.name}</span>
        {tileContents()}
      </button>
      {active === conversation.id ? 'active' : null}
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
  toggleConversation: PropTypes.func.isRequired,
  active: PropTypes.number,
};

ConversationTile.defaultProps = {
  active: null,
};

export default ConversationTile;
