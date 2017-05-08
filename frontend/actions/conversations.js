import * as ApiConversationUtil from '../util/conversation_api';
import receiveErrors from './errors';

export const RECEIVE_CONVERSATIONS = 'RECEIVE_CONVERSATIONS';
export const RECEIVE_CONVERSATION = 'RECEIVE_CONVERSATION';
export const RECEIVE_OFFER = 'RECEIVE_OFFER';
export const SWITCH_BOX = 'SWITCH_BOX';

const receiveConversations = conversations => ({
  type: RECEIVE_CONVERSATIONS,
  conversations,
});

const receiveConversation = conversation => ({
  type: RECEIVE_CONVERSATION,
  conversation,
});

const receiveOffer = offer => ({
  type: RECEIVE_OFFER,
  offer,
});

export const switchBox = box => ({
  type: SWITCH_BOX,
  box,
});

export const fetchConversations = () => dispatch => (
  ApiConversationUtil.fetchConversations()
    .then(data => dispatch(receiveConversations(data)))
);

export const fetchConversation = id => dispatch => (
  ApiConversationUtil.fetchConversation(id)
    .then(data => dispatch(receiveConversation(data)))
);

export const createConversation = conversation => dispatch => (
  ApiConversationUtil.createConversation(conversation)
    .then(
      offer => dispatch(receiveOffer(offer)),
      err => dispatch(receiveErrors(err)),
    )
);

export const updateConversation = conversation => dispatch => (
  ApiConversationUtil.updateConversation(conversation)
  .then(
    offer => dispatch(receiveOffer(offer)),
    err => dispatch(receiveErrors(err)),
  )
);
