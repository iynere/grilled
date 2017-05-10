import React from 'react';
import PropTypes from 'prop-types';
import MessageForm from '../messaging/message_form_container';

class ListingDetail extends React.Component {
  componentDidMount() {
    this.props.fetchListing();
  }

  componentWillUnmount() {
    this.props.clearListing();
  }
  render() {
    if (this.props.listing === null) return (<div className="loading" />);
    return (
      <div>
        <section className="listingInfo">
          <h1>{this.props.listing.name}</h1>
          <h3>{this.props.listing.brand}</h3>
          <h3>{this.props.listing.price}</h3>
          <p>
            {this.props.listing.description}
          </p>
        </section>
        <section className="listingButtons">
          <button className="btn btn-square">buy now</button>
          <button
            onClick={this.props.toggleMessageModal}
            className="btn btn-square"
          >
              make offer
          </button>
          <button className="btn btn-square">message seller</button>
        </section>
        <span>Sold by {this.props.listing.username}</span>
        <MessageForm listingId={this.props.listing.id} />
      </div>
    );
  }
}

ListingDetail.propTypes = {
  listing: PropTypes.shape({
    name: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    username: PropTypes.string,
    id: PropTypes.number,
  }),
  fetchListing: PropTypes.func.isRequired,
  clearListing: PropTypes.func.isRequired,
  toggleMessageModal: PropTypes.func.isRequired,
};

ListingDetail.defaultProps = {
  listing: null,
};

export default ListingDetail;
