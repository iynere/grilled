import React from 'react';
import PropTypes from 'prop-types';
import ListingTile from './listing_tile';

const Listings = ({ listings, fetchListings }) => {
  fetchListings();
  const listingTiles = listings
    .map(listing => <ListingTile key={listing.id} listing={listing} />);

  return (
    <section className="row">
      {listingTiles}
    </section>
  );
};

Listings.propTypes = {
  fetchListings: PropTypes.func.isRequired,
  listings: PropTypes.arrayOf(PropTypes.object),
};

Listings.defaultProps = {
  listings: [],
};

export default Listings;
