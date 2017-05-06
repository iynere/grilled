import { merge } from 'lodash';
import { RECEIVE_LISTINGS, RECEIVE_LISTING, CLEAR_LISTING } from '../actions/listings';

const defaultListings = {
  listings: [],
  detail: null,
};

const ListingsReducer = (state = defaultListings, action) => {
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_LISTINGS:
      newState.listings = action.listings;
      return newState;
    case RECEIVE_LISTING:
      newState.detail = action.listing;
      return newState;
    case CLEAR_LISTING:
      newState.detail = null;
      return newState;
    default:
      return newState;
  }
};

export default ListingsReducer;
