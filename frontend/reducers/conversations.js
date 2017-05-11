import { merge } from 'lodash';
import {
        RECEIVE_CONVERSATIONS,
        RECEIVE_CONVERSATION,
        SWITCH_BOX,
        TOGGLE_CONVERSATION,
        RECEIVE_MESSAGE,
        TOGGLE_MESSAGE_MODAL,
        RECEIVE_MESSAGE_SUCCESS,
        OPEN_OFFER_MODAL,
      } from '../actions/conversations';

const defaultConversations = {
  mailBox: {},
  activeConversation: null,
  box: 'received',
  modalOpen: false,
  messageSuccess: false,
  offerModal: false,
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
    case SWITCH_BOX:
      newState.box = action.box;
      newState.activeConversation = null;
      return newState;
    case RECEIVE_MESSAGE:
      newState.mailBox[action.message.conversation_id].messages.push(action.message);
      if (action.message.offer > 0) {
        newState.mailBox[action.message.conversation_id].offer = action.message.offer;
      }
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
      newState.messageSuccess = false;
      newState.offerModal = false;
      return newState;
    case RECEIVE_MESSAGE_SUCCESS:
      newState.messageSuccess = true;
      return newState;
    case OPEN_OFFER_MODAL:
      newState.offerModal = true;
      newState.modalOpen = true;
      return newState;
    default:
      return newState;
  }
};

export default ConversationsReducer;
