import React from 'react';
import PropTypes from 'prop-types';
import { filter } from 'lodash';
import Tile from './conversation_tile_container';

class MailBox extends React.Component {
  componentDidMount() {
    this.props.fetchConversations();
  }
  componentWillUnmount() {
    this.props.closeConversation();
  }

  // tiles() {
  //   let conversations;
  //   if (this.props.conversations.length > 0) {
  //     const selection = this.props.box === 'sent' ? 'sender' : 'recipient';
  //     const selectedConversations = filter(
  //       this.props.conversations,
  //       conv => conv[selection].id === this.props.currentUserId,
  //     );
  //     conversations = selectedConversations.map(
  //       conv => <Tile key={conv.id} conversation={conv} />,
  //     );
  //   }
  //   if (conversations.count > 0) return conversations;
  //   return (
  //     <li className="no-messages">No Messages to Display</li>
  //   );
  // }
  render() {
    if (this.props.conversations.length < 1) return (<div className="loading" />);
    let conversationDisplay;
    if (this.props.conversations.length > 0) {
      const selection = this.props.box === 'sent' ? 'sender' : 'recipient';
      const selectedConversations = filter(
        this.props.conversations,
        conv => conv[selection].id === this.props.currentUserId,
      );
      conversationDisplay = selectedConversations.map(
        conv => <Tile key={conv.id} conversation={conv} />,
      );
    }
    return (
      <div className="mailbox">
        <header className="mailbox-header">
          <button
            className={this.props.box === 'sent' ? 'active' : null}
            onClick={this.props.switchToSent}
          >
            Sent
          </button>
          <button
            onClick={this.props.switchToReceived}
            className={this.props.box === 'received' ? 'active' : null}
          >
            Received
          </button>
        </header>
        <ul>
          {conversationDisplay.length > 0 ? conversationDisplay : 'No Messages to Display'}
        </ul>
      </div>
    );
  }
}

MailBox.propTypes = {
  fetchConversations: PropTypes.func.isRequired,
  switchToSent: PropTypes.func.isRequired,
  switchToReceived: PropTypes.func.isRequired,
  box: PropTypes.string.isRequired,
  currentUserId: PropTypes.number.isRequired,
  conversations: PropTypes.arrayOf(PropTypes.object).isRequired,
  closeConversation: PropTypes.func.isRequired,
};

export default MailBox;
