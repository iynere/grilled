import { connect } from 'react-redux';
import { login, signup } from '../../actions/session';
import Index from './index';

const mapStateToProps = ({ errors, session }) => ({
  currentUser: session.currentUser,
  errors,
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  signup: user => dispatch(signup(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
