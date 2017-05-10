import React from 'react';
import PropTypes from 'prop-types';
import Errors from '../errors/errors';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      offer: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const message = {
      body: this.state.body,
      listing_id: this.props.listingId,
      user_id: this.props.currentUserId,
    };
    if (this.state.offer !== null) {
      message.offer = this.state.offer;
    }
    if (this.props.conversationId) {
      message.conversation_id = this.props.conversationId;
    }
    this.props.createMessage(message);
  }

  render() {
    return (
      <div>
        <button>X</button>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <Errors errorsArray={this.props.errors.body} />
            <input
              placeholder="Write your message here...."
              className=""
              onChange={this.update('body')}
              type="text"
              id="body"
            />
            <button className="btn btn-square">send</button>
          </div>
        </form>
      </div>
    );
  }
}

MessageForm.propTypes = {
  errors: PropTypes.shape({
    body: PropTypes.array,
  }).isRequired,
  listingId: PropTypes.number.isRequired,
  currentUserId: PropTypes.number.isRequired,
  createMessage: PropTypes.func.isRequired,
  conversationId: PropTypes.number,
};

MessageForm.defaultProps = {
  conversationId: null,
};

export default MessageForm;
