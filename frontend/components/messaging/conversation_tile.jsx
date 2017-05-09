import React from 'react';
import PropTypes from 'prop-types';
import ConversationDetail from './conversation_detail_container';

const ConversationTile = ({ conversation, displayUser, toggleConversation, active }) => {
  const user = conversation[displayUser].username;
  const offerContent = () => (
    <section>
      <span>Offer: ${conversation.offer}</span>
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
      <a onClick={() => toggleConversation(conversation.id)}>
        <span>{conversation.listing.name}</span>
        {tileContents()}
      </a>
      {active === conversation.id ? <ConversationDetail id={conversation.id} /> : null}
    </li>
  );
};

ConversationTile.propTypes = {
  conversation: PropTypes.shape({
    listing: PropTypes.shape({
      name: PropTypes.string,
    }),
    offer: PropTypes.number,
  }).isRequired,
  displayUser: PropTypes.string.isRequired,
  toggleConversation: PropTypes.func.isRequired,
  active: PropTypes.number,
};

ConversationTile.defaultProps = {
  active: null,
};

export default ConversationTile;
