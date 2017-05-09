import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './app';
import IndexContainer from './index/index_container';
import ListingDetailContainer from './listings/listings_detail_container';
import MailBoxContainer from './messaging/mailbox_container';

const Root = ({ store }) => {
  const ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
    }
  };
  return (
    <Provider store={store}>
      <Router>
        <App>
          <Route exact path="/" component={IndexContainer} />
          <Route path="/listings/:id" component={ListingDetailContainer} onEnter={ensureLoggedIn} />
          <Route path="/messages" component={MailBoxContainer} onEnter={ensureLoggedIn} />
        </App>
      </Router>
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.shape({
    getStore: PropTypes.func,
    dispatch: PropTypes.func,
  }).isRequired,
};

export default Root;
