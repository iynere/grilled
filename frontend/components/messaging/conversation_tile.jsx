import React from 'react';
import PropTypes from 'prop-types';
import ConversationDetail from './conversation_detail_container';
import MessageForm from './message_form_container';

const ConversationTile = ({
  conversation,
  displayUser,
  toggleConversation,
  active,
  toggleMessageModal,
  openOfferModal,
}) => {
  const user = conversation[displayUser].username;
  const offerContent = () => (
    <section>
      <span className="margin-right-half-rem">Offer: ${conversation.offer}</span>
      <button
        className="btn btn-square margin-right-half-rem"
        onClick={openOfferModal}
      >
        Counter
      </button>
    </section>
  );
  const tileContents = () => {
    if (active === conversation.id) {
      return (
        <div className="flex-center justify-between full-width">
          <span className="align-self-center">{conversation.listing.name}</span>
          <div className="flex-center">
            {conversation.offer > 0 ? offerContent() : null}
            <button onClick={toggleMessageModal} className="btn btn-square">REPLY</button>
          </div>
          <MessageForm
            conversationId={conversation.id}
            listingId={conversation.listing.id}
          />
        </div>
      );
    }
    return (
      <div className="row full-width">
        <div className="ternary">
          <span>{conversation.listing.name}</span>
        </div>
        <div className="ternary">
          {conversation.offer > 0 ? <span>offer: ${conversation.offer}</span> : null }
        </div>
        <div className="ternary">
          <strong>{user}</strong>
        </div>
      </div>
    );
  };
  return (
    <li className={active === conversation.id ? 'conversation active' : 'conversation'}>
      <div role="button" onClick={() => toggleConversation(conversation.id)}>
        {tileContents()}
      </div>
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
  toggleMessageModal: PropTypes.func.isRequired,
  openOfferModal: PropTypes.func.isRequired,
};

ConversationTile.defaultProps = {
  active: null,
};

export default ConversationTile;
