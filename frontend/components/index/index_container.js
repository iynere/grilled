import { connect } from 'react-redux';
import Index from './index';

const mapStateToProps = ({ errors, session }) => ({
  currentUser: session.currentUser,
});

export default connect(mapStateToProps)(Index);
