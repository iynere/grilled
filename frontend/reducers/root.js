import { combineReducers } from 'redux';
import session from './session';
import listings from './listings';
import errors from './errors';

export default combineReducers({
  session,
  listings,
  errors,
});
