import React from 'react';
import PropTypes from 'prop-types';
import Errors from '../errors/errors';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginGuy = this.loginGuy.bind(this);
    this.loginHank = this.loginHank.bind(this);
    this.switchForm = this.switchForm.bind(this);
  }

  submitHandler() {
    return this.props.formType === 'login' ? this.props.login : this.props.signup;
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = { username: this.state.username, password: this.state.password };
    if (this.isSignup()) {
      user.email = this.state.email;
    }
    this.submitHandler()(user).then(() => {
      this.props.toggleModal();
    });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value,
    });
  }


  loginGuy() {
    const guest = { username: '3DgUyF', password: 'yoloswag' };
    this.props.login(guest);
  }

  loginHank() {
    const guest = { username: 'h4nkGr1ll', password: 'yoloswag' };
    this.props.login(guest);
  }

  otherAuth() {
    return this.props.formType === 'login' ? 'signup' : 'login';
  }

  isSignup() {
    return this.props.formType === 'signup';
  }

  switchForm(e) {
    e.preventDefault();
    this.props.setAuthFormType(this.otherAuth());
  }

  signupField() {
    if (this.props.formType === 'signup') {
      return (
        <div className="form-group">
          <Errors errorsArray={this.props.errors.email} />
          <input
            placeholder="Email"
            className="width-full margin-bottom-1rem"
            onChange={this.update('email')}
            type="email"
            id="email"
            value={this.state.email}
          />
        </div>
      );
    }
    return null;
  }

  render() {
    return (
      <div className="auth-form">
        <h3 className="form-header">{ this.props.formType === 'login' ? 'LOG IN TO ' : 'SIGN UP FOR ' }GRILLED</h3>
        <button
          onClick={this.loginGuy}
          className="margin-top-1rem btn btn-square"
        >
          Log In As Guy
        </button>
        <button
          onClick={this.loginHank}
          className="margin-top-1rem btn btn-square margin-left-half-rem"
        >
          Log In As Hank
        </button>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <Errors errorsArray={this.props.errors.username} />
            <input
              placeholder="Username"
              className="width-full margin-top-1rem  margin-bottom-1rem"
              onChange={this.update('username')}
              type="text"
              id="username"
              value={this.state.username}
            />
          </div>
          { this.signupField() }
          <div className="form-group">
            <Errors errorsArray={this.props.errors.password} />
            <input
              placeholder="Password"
              className="width-full margin-bottom-1rem"
              onChange={this.update('password')}
              type="password"
              id="password"
              value={this.state.password}
            />
          </div>
          <button className="btn btn-square margin-top-half-rem">
            {this.props.formType === 'login' ? 'Log In' : 'Sign Up'}
          </button>
        </form>
        <button
          className="margin-top-1rem btn btn-square red"
          onClick={this.switchForm}
        >
          {this.otherAuth() === 'login' ? 'ALREADY HAVE AN ACCOUNT? SIGN IN HERE' : 'CREATE AN ACCOUNT'}
        </button>
      </div>
    );
  }
}

AuthForm.propTypes = {
  formType: PropTypes.string,
  setAuthFormType: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    username: PropTypes.array,
    email: PropTypes.array,
    password: PropTypes.array,
  }).isRequired,
  login: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired,
};

AuthForm.defaultProps = {
  formType: 'login',
};

export default AuthForm;
