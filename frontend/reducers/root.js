import { combineReducers } from 'redux';
import session from './session';
import listings from './listings';
import errors from './errors';
import conversations from './conversations';

export default combineReducers({
  session,
  listings,
  conversations,
  errors,
});
