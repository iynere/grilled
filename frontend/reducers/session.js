import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER, SET_AUTH_FORM_TYPE } from '../actions/session';

const defaultSession = {
  currentUser: null,
  formType: 'login',
};

const SessionReducer = (state = defaultSession, action) => {
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState.currentUser = action.currentUser;
      return newState;
    case SET_AUTH_FORM_TYPE:
      newState.formType = action.formType;
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
