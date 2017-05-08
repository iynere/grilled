import * as APISessionUtil from '../util/session_api';
import { receiveErrors } from './errors';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const SET_AUTH_FORM_TYPE = 'SET_AUTH_FORM_TYPE';

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

export const setAuthFormType = formType => ({
  type: SET_AUTH_FORM_TYPE,
  formType,
});

export const login = user => dispatch => (
  APISessionUtil.login(user)
    .then(data => dispatch(receiveCurrentUser(data)), err => dispatch(receiveErrors(err)))
);

export const logout = () => dispatch => (
  APISessionUtil.logout()
    .then(() => dispatch(receiveCurrentUser(null)), err => dispatch(receiveErrors(err)))
);

export const signup = user => dispatch => (
  APISessionUtil.signup(user)
    .then(data => dispatch(receiveCurrentUser(data)), err => dispatch(receiveErrors(err)))
);
