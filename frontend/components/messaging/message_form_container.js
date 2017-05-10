import { connect } from 'react-redux';
import { createMessage, toggleMessageModal } from '../../actions/conversations';
import MessageForm from './message_form';

const mapStateToProps = ({ session, errors, conversations }) => ({
  currentUserId: session.currentUser.id,
  errors,
  modalOpen: conversations.modalOpen,
});

const mapDispatchToProps = dispatch => ({
  createMessage: message => dispatch(createMessage(message)),
  toggleMessageModal: () => dispatch(toggleMessageModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
