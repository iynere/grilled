import { connect } from 'react-redux';
import { toggleConversation } from '../../actions/conversations';
import ConversationTile from './conversation_tile';


const mapStateToProps = ({ conversations }) => ({
  active: conversations.activeConversation,
  displayUser: conversations.box === 'sent' ? 'recipient' : 'sender',
});

const mapDispatchToProps = dispatch => ({
  toggleConversation: id => dispatch(toggleConversation(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConversationTile);
