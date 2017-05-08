import { merge } from 'lodash';
import {
        RECEIVE_CONVERSATIONS,
        RECEIVE_CONVERSATION,
        RECEIVE_OFFER,
      } from '../actions/conversations';

const defaultConversations = {
  mailBox: [],
  openConversation: null,
};

const ConversationsReducer = (state = defaultConversations, action) => {
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_CONVERSATIONS:
      newState.mailBox = action.converations;
      return newState;
    case RECEIVE_CONVERSATION:
      newState.openConversation = action.conversation;
      return newState;
    case RECEIVE_OFFER:
      newState.mailBox[action.id].offer = action.offer;
      return newState;
    default:
      return newState;
  }
};

export default ConversationsReducer;
