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

  renderButtons() {
    if (this.props.listing.user_id === this.props.currentUserId) return null;
    return (
      <section className="listing-buttons margin-top-1rem">
        <button
          onClick={this.props.openOfferModal}
          className="btn btn-square"
        >
            make offer
        </button>
        <button
          onClick={this.props.toggleMessageModal}
          className="btn btn-square"
        >
          message seller
        </button>
      </section>
    );
  }

  render() {
    if (this.props.listing === null) return (<div className="loading" />);
    return (
      <div className="listing">
        <section className="listing-info">
          <h1>{this.props.listing.name}</h1>
          <h3>{this.props.listing.brand}</h3>
          <h3>${this.props.listing.price}</h3>
          <p className="margin-top-1rem">
            {this.props.listing.description}
          </p>
        </section>
        {this.renderButtons()}
        <span>Sold by {this.props.listing.username}</span>
        <MessageForm listingId={this.props.listing.id} fromListing />
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
    user_id: PropTypes.number,
    id: PropTypes.number,
  }),
  fetchListing: PropTypes.func.isRequired,
  clearListing: PropTypes.func.isRequired,
  toggleMessageModal: PropTypes.func.isRequired,
  currentUserId: PropTypes.number.isRequired,
  openOfferModal: PropTypes.func.isRequired,
};

ListingDetail.defaultProps = {
  listing: null,
};

export default ListingDetail;
