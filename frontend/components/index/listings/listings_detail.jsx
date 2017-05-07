import React from 'react';
import PropTypes from 'prop-types';

class ListingDetail extends React.Component {
  componentDidMount() {
    this.props.fetchListing();
  }

  componentWillUnmount() {
    this.props.clearListing();
  }
  render() {
    if (this.props.listing === null) return (<div className="loading">loading</div>);
    return (
      <div>
        <section>
          <h1>{this.props.listing.name}</h1>
          <h3>{this.props.listing.brand}</h3>
          <h3>{this.props.listing.price}</h3>
        </section>
      </div>
    );
  }
}

export default ListingDetail;
