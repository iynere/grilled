import { merge } from 'lodash';
import {
        RECEIVE_CONVERSATIONS,
        RECEIVE_CONVERSATION,
        RECEIVE_OFFER,
        SWITCH_BOX,
        TOGGLE_CONVERSATION,
      } from '../actions/conversations';

const defaultConversations = {
  mailBox: {},
  details: {},
  activeConversation: null,
  box: 'received',
};

const ConversationsReducer = (state = defaultConversations, action) => {
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_CONVERSATIONS:
      newState.mailBox = action.conversations;
      return newState;
    case RECEIVE_CONVERSATION:
      newState.details = action.conversation;
      return newState;
    case RECEIVE_OFFER:
      newState.mailBox[action.id].offer = action.offer;
      return newState;
    case SWITCH_BOX:
      newState.box = action.box;
      return newState;
    case TOGGLE_CONVERSATION:
      if (action.id === newState.activeConversation) {
        newState.activeConversation = null;
      } else {
        newState.activeConversation = action.id;
      }
      return newState;
    default:
      return newState;
  }
};

export default ConversationsReducer;
