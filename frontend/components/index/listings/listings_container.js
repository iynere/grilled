import { connect } from 'react-redux';
import { fetchListings } from '../../../actions/listings';
import Listings from './listings';

const mapStateToProps = ({ listings }) => ({
  listings: listings.listings,
});

const mapDispatchToProps = dispatch => ({
  fetchListings: () => dispatch(fetchListings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Listings);
