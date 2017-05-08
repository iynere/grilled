import { merge } from 'lodash';
import {
        RECEIVE_CONVERSATIONS,
        RECEIVE_CONVERSATION,
        RECEIVE_OFFER,
        SWITCH_BOX,
      } from '../actions/conversations';

const defaultConversations = {
  mailBox: {},
  openConversation: null,
  box: 'received',
};

const ConversationsReducer = (state = defaultConversations, action) => {
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_CONVERSATIONS:
      newState.mailBox = action.conversations;
      return newState;
    case RECEIVE_CONVERSATION:
      newState.openConversation = action.conversation;
      return newState;
    case RECEIVE_OFFER:
      newState.mailBox[action.id].offer = action.offer;
      return newState;
    case SWITCH_BOX:
      newState.box = action.box;
      return newState;
    default:
      return newState;
  }
};

export default ConversationsReducer;
