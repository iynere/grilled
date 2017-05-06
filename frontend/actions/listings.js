import * as ApiListingUtil from '../util/listing_api';

export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
export const RECEIVE_LISTING = 'RECEIVE_LISTING';
export const CLEAR_LISTING = 'CLEAR_LISTING';

export const receiveListings = listings => ({
  type: RECEIVE_LISTINGS,
  listings,
});

export const receiveListing = listing => ({
  type: RECEIVE_LISTING,
  listing,
});

export const clearListing = () => ({
  type: CLEAR_LISTING,
});

export const fetchListings = () => dispatch => (
  ApiListingUtil.fetchListings().then(
    data => dispatch(receiveListings(data)),
  )
);

export const fetchListing = id => dispatch => (
  ApiListingUtil.fetchListing(id).then(
    data => dispatch(receiveListing(data)),
  )
);
