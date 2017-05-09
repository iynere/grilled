import React from 'react';
import PropTypes from 'prop-types';
import MessageTile from './message_tile';

class ConversationDetail extends React.Component {
  componentDidMount() {
    this.props.fetchConversation(this.props.id);
  }

  render() {
    if (this.props.messages.length < 1) return <div className="loading" />;
    const messageTiles = this.props.messages
      .map(message => <MessageTile key={message.id} age={message.age} body={message.body} user={'user'} />);
    return (
      <ul>
        {messageTiles}
      </ul>
    );
  }
}

ConversationDetail.propTypes = {
  fetchConversation: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  messages: PropTypes.arrayOf(PropTypes.object),
};

ConversationDetail.defaultProps = {
  messages: [],
};

export default ConversationDetail;
