import { connect } from 'react-redux';
import { values } from 'lodash';
import {
          fetchConversations,
          fetchConversation,
          updateConversation,
          switchBox,
        } from '../../actions/conversations';
import MailBox from './mailbox';

const mapStateToProps = ({ conversations, session }) => ({
  currentUserId: session.currentUser.id,
  conversations: values(conversations.mailBox),
  openConversation: conversations.openConversation,
  box: conversations.box,
});

const mapDispatchToProps = dispatch => ({
  fetchConversations: () => dispatch(fetchConversations()),
  fetchConversation: id => dispatch(fetchConversation(id)),
  updateConversation: conversation => dispatch(updateConversation(conversation)),
  switchToReceived: () => dispatch(switchBox('received')),
  switchToSent: () => dispatch(switchBox('sent')),
});

export default connect(mapStateToProps, mapDispatchToProps)(MailBox);
