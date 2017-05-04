import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER } from '../actions/session';

const defaultSession = {
  currentUser: null,
};

const SessionReducer = (state = defaultSession, action) => {
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState.currentUser = action.currentUser;
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
