import React from 'react';
import PropTypes from 'prop-types';

class MailBox extends React.Component {
  componentDidMount() {
    this.props.fetchConversations();
  }
  render() {
    return (
      <h1>MAILBOX</h1>
    );
  }
}

MailBox.propTypes = {
  fetchConversations: PropTypes.func.isRequired,
};

export default MailBox;
