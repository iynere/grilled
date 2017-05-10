import { connect } from 'react-redux';
import { values } from 'lodash';
import {
          fetchConversations,
          fetchConversation,
          switchBox,
          toggleConversation,
        } from '../../actions/conversations';
import MailBox from './mailbox';

const mapStateToProps = ({ conversations, session }) => ({
  currentUserId: session.currentUser.id,
  conversations: values(conversations.mailBox),
  box: conversations.box,
});

const mapDispatchToProps = dispatch => ({
  fetchConversations: () => dispatch(fetchConversations()),
  fetchConversation: id => dispatch(fetchConversation(id)),
  switchToReceived: () => dispatch(switchBox('received')),
  switchToSent: () => dispatch(switchBox('sent')),
  closeConversation: () => dispatch(toggleConversation(null)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MailBox);
