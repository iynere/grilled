import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/errors';
import { RECEIVE_CURRENT_USER } from '../actions/session';

const ErrorsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors.responseJSON;
    case RECEIVE_CURRENT_USER:
    case CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
};

export default ErrorsReducer;
