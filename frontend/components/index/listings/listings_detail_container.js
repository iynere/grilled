import { connect } from 'react-redux';
import { fetchListing, clearListing } from '../../../actions/listings';
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
    listingId,
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ListingsDetail);
