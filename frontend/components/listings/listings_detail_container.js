import { connect } from 'react-redux';
import { fetchListing, clearListing } from '../../actions/listings';
import { toggleMessageModal, openOfferModal } from '../../actions/conversations';
import ListingsDetail from './listings_detail';

const mapStateToProps = ({ listings, session }) => ({
  listing: listings.detail,
  currentUserId: session.currentUser.id,
});

const mapDispatchToProps = (dispatch, { match }) => {
  const listingId = parseInt(match.params.id, 10);
  return ({
    fetchListing: () => dispatch(fetchListing(listingId)),
    clearListing: () => dispatch(clearListing()),
    toggleMessageModal: () => dispatch(toggleMessageModal()),
    openOfferModal: () => dispatch(openOfferModal()),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ListingsDetail);
