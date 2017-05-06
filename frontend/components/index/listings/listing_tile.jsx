import React from 'react';
import PropTypes from 'prop-types';

const ListingTile = ({ listing }) => {
  if (listing === null) {
    return (
      <div className="loading">loading</div>
    );
  }
  return (
    <a className="listing-tile">
      <section>
        <h4>
          {listing.name}
        </h4>
        <div>
          <span>
            {listing.brand}
          </span>
          <strong>
            ${listing.price}
          </strong>
        </div>
      </section>
    </a>
  );
};

ListingTile.propTypes = {
  listing: PropTypes.shape({
    name: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.integer,
  }),
};

ListingTile.defaultProps = {
  listing: null,
};

export default ListingTile;
