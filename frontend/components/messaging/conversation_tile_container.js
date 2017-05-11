import { connect } from 'react-redux';
import { toggleConversation, toggleMessageModal, openOfferModal } from '../../actions/conversations';
import ConversationTile from './conversation_tile';


const mapStateToProps = ({ conversations }) => ({
  active: conversations.activeConversation,
  displayUser: conversations.box === 'sent' ? 'recipient' : 'sender',
});

const mapDispatchToProps = dispatch => ({
  toggleConversation: id => dispatch(toggleConversation(id)),
  toggleMessageModal: () => dispatch(toggleMessageModal()),
  openOfferModal: () => dispatch(openOfferModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConversationTile);
