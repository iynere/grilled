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

  componentWillUnmount() {
    if (this.props.modalOpen) {
      this.props.toggleMessageModal();
    }
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
    };
    if (this.state.offer !== null) {
      message.body = `New Offer: $${this.state.offer} ${this.state.body}`;
      message.offer = this.state.offer;
    }
    if (this.props.conversationId) {
      message.conversation_id = this.props.conversationId;
    }
    this.props.createMessage(message, this.props.fromListing).then(
      () => {
        if (!this.props.messageSuccess) this.props.toggleMessageModal();
        this.setState({ offer: null });
      },
    );
  }

  render() {
    if (this.props.modalOpen) {
      return (
        <div className="message-modal">
          <section>
            <button
              className="btn btn-square margin-right-half-rem margin-top-half-rem"
              onClick={this.props.toggleMessageModal}
            >
              X
            </button>
            {
              this.props.messageSuccess ?
                (
                  <div className="message-success">
                    <h3>Message Sent</h3>
                    <button
                      className="btn btn-square margin-top-1rem"
                      onClick={this.props.toggleMessageModal}
                    >
                      ok
                    </button>
                  </div>
                ) :
                (
                  <form className="margin-top-1rem" onSubmit={this.handleSubmit}>
                    {
                      this.props.offerModal ? (
                        <div className="form-group">
                          <Errors errorsArray={this.props.errors.offer} />
                          <label htmlFor="offer">Offer in USD</label>
                          <input
                            id="offer"
                            onChange={this.update('offer')}
                            className="margin-left-half-rem"
                            type="number"
                          />
                        </div>
                      ) : null
                    }
                    <div className="form-group">
                      <Errors errorsArray={this.props.errors.body} />
                      <label htmlFor="body">
                        Write a message here
                      </label>
                      <input
                        placeholder="How's the burn?"
                        onChange={this.update('body')}
                        type="text"
                        id="body"
                      />
                    </div>
                    <button
                      className="btn btn-square margin-right-half-rem"
                    >
                      send
                    </button>
                  </form>
                )
            }
          </section>
        </div>
      );
    }
    return null;
  }
}

MessageForm.propTypes = {
  errors: PropTypes.shape({
    body: PropTypes.array,
    offer: PropTypes.array,
  }).isRequired,
  listingId: PropTypes.number.isRequired,
  createMessage: PropTypes.func.isRequired,
  conversationId: PropTypes.number,
  toggleMessageModal: PropTypes.func.isRequired,
  modalOpen: PropTypes.bool.isRequired,
  fromListing: PropTypes.bool,
  messageSuccess: PropTypes.bool.isRequired,
  offerModal: PropTypes.bool.isRequired,
};

MessageForm.defaultProps = {
  conversationId: null,
  fromListing: false,
};

export default MessageForm;
