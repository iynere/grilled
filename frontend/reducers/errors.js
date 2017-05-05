import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/errors';

const ErrorsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors.responseJSON;
    case CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
};

export default ErrorsReducer;
