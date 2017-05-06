import React from 'react';
import PropTypes from 'prop-types';
import ListingTile from './listing_tile';

class Listings extends React.Component {

  componentDidMount() {
    this.props.fetchListings();
  }

  render() {
    const listingTiles = this.props.listings
      .map(listing => <ListingTile key={listing.id} listing={listing} />);
    return (
      <section className="row">
        {listingTiles}
      </section>
    );
  }

}

Listings.propTypes = {
  fetchListings: PropTypes.func.isRequired,
  listings: PropTypes.arrayOf(PropTypes.object),
};

Listings.defaultProps = {
  listings: [],
};

export default Listings;
