import { merge } from 'lodash';
import {
        RECEIVE_CONVERSATIONS,
        RECEIVE_CONVERSATION,
        RECEIVE_OFFER,
        SWITCH_BOX,
        TOGGLE_CONVERSATION,
        RECEIVE_MESSAGE,
        TOGGLE_MESSAGE_MODAL,
      } from '../actions/conversations';

const defaultConversations = {
  mailBox: {},
  activeConversation: null,
  box: 'received',
  modalOpen: false,
};

const ConversationsReducer = (state = defaultConversations, action) => {
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_CONVERSATIONS:
      newState.mailBox = action.conversations;
      return newState;
    case RECEIVE_CONVERSATION:
      newState.mailBox[action.conversation.id].messages = action.conversation.messages;
      return newState;
    case RECEIVE_OFFER:
      newState.mailBox[action.id].offer = action.offer;
      return newState;
    case SWITCH_BOX:
      newState.box = action.box;
      newState.activeConversation = null;
      return newState;
    case RECEIVE_MESSAGE:
      newState.mailBox[action.message.conversation_id].messages.push(action.message);
      return newState;
    case TOGGLE_CONVERSATION:
      // if (action.id === newState.activeConversation) {
      //   newState.activeConversation = null;
      // } else {
      newState.activeConversation = action.id;
      // }
      return newState;
    case TOGGLE_MESSAGE_MODAL:
      newState.modalOpen = !state.modalOpen;
      return newState;
    default:
      return newState;
  }
};

export default ConversationsReducer;
