import { connect } from 'react-redux';
import { fetchConversation } from '../../actions/conversations';
import ConversationDetail from './conversation_detail';

const mapStateToProps = ({ conversations }) => ({
  messages: conversations.mailBox[conversations.activeConversation].messages,
});

const mapDispatchToProps = dispatch => ({
  fetchConversation: id => dispatch(fetchConversation(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConversationDetail);
