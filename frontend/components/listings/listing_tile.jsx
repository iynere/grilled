import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ListingTile = ({ listing }) => (
  <Link to={`/listings/${listing.id}`} className="listing-tile">
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
  </Link>
);

ListingTile.propTypes = {
  listing: PropTypes.shape({
    name: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.integer,
    id: PropTypes.integer,
  }),
};

ListingTile.defaultProps = {
  listing: null,
};

export default ListingTile;
