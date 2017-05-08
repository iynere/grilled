import { connect } from 'react-redux';
import {
          fetchConversations,
          fetchConversation,
          updateConversation,
        } from '../../actions/conversations';
import MailBox from './mailbox';

const mapStateToProps = ({ conversations, session }) => ({
  currentUserId: session.currentUser.id,
  conversations: conversations.mailBox,
  openConversation: conversations.openConversation,
});

const mapDispatchToProps = dispatch => ({
  fetchConversations: () => dispatch(fetchConversations()),
  fetchConversation: id => dispatch(fetchConversation(id)),
  updateConversation: conversation => dispatch(updateConversation(conversation)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MailBox);
