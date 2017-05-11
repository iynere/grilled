import { connect } from 'react-redux';
import { createMessage, toggleMessageModal } from '../../actions/conversations';
import MessageForm from './message_form';

const mapStateToProps = ({ errors, conversations }) => ({
  errors,
  modalOpen: conversations.modalOpen,
  messageSuccess: conversations.messageSuccess,
});

const mapDispatchToProps = dispatch => ({
  createMessage: (message, fromListing) => dispatch(createMessage(message, fromListing)),
  toggleMessageModal: () => dispatch(toggleMessageModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
