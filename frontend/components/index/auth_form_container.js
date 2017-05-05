import { connect } from 'react-redux';
import { login, signup, setAuthFormType } from '../../actions/session';
import AuthForm from './auth_form';

const mapStateToProps = ({ errors, session }) => ({
  errors,
  formType: session.formType,
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  signup: user => dispatch(signup(user)),
  setAuthFormType: formType => dispatch(setAuthFormType(formType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
