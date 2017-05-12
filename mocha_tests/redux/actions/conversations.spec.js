import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import * as actions from '../../../frontend/actions/conversations';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('async actions for conversations', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates RECEIVE_CONVERSATIONS when fetchConversations finishes', () => {
    nock('http://localhost/')
      .log(console.log)
      .get('/api/conversations')
      .reply(200, {id: 1, username: 'pr0p4n3'});

    const expectedActions = [
      { type: actions.RECEIVE_CONVERSATIONS, conversations: {data: {id: 1, username: 'pr0p4n3'}, "headers": {"content-type": "application/json"}, "status": 200 } }
    ]
    const store = mockStore({ conversations: null })

    return store.dispatch(actions.fetchConversations())
      .then(() => { // return of async actions
        expect(store.getActions()).to.eql(expectedActions)
      })
  })

  it('creates RECEIVE_CONVERSATION when fetchConversation finishes', () => {
    nock('http://localhost/')
      .log(console.log)
      .get('/api/conversations/1')
      .reply(200, {id: 1, username: 'pr0p4n3'});

    const expectedActions = [
      { type: actions.RECEIVE_CONVERSATION, conversation: {data: {id: 1, username: 'pr0p4n3'}, "headers": {"content-type": "application/json"}, "status": 200 } }
    ]
    const store = mockStore({ conversations: null })

    return store.dispatch(actions.fetchConversation(1))
      .then(() => { // return of async actions
        expect(store.getActions()).to.eql(expectedActions)
      })
  })

  it('creates RECEIVE_MESSAGE when message created', () => {
    nock('http://localhost/')
      .log(console.log)
      .post('/api/messages/')
      .reply(200, {id: 1, username: 'pr0p4n3'});

    const expectedActions = [
      { type: actions.RECEIVE_MESSAGE, message: {data: {id: 1, username: 'pr0p4n3'}, "headers": {"content-type": "application/json"}, "status": 200 } }
    ]
    const store = mockStore({ conversations: null })

    return store.dispatch(actions.createMessage())
      .then(() => { // return of async actions
        expect(store.getActions()).to.eql(expectedActions)
      })
  })

})
