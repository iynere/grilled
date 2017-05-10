import { connect } from 'react-redux';
import { createMessage } from '../../actions/conversations';
import MessageForm from './message_form';

const mapStateToProps = ({ session, errors }) => ({
  currentUserId: session.currentUser.id,
  errors,
});

const mapDispatchToProps = dispatch => ({
  createMessage: message => dispatch(createMessage(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
