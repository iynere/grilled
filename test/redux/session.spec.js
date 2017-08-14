import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import * as actions from '../../frontend/actions/session';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('sync actions for session', () => {
  it('setAuthFormType should create an action to switch between authForm types', () => {
    const formType = 'signup'
    const expectedAction = {
      type: actions.SET_AUTH_FORM_TYPE,
      formType,
    }
    expect(actions.setAuthFormType(formType)).to.eql(expectedAction)
  })
})

describe('async actions for session', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates RECEIVE_CURRENT_USER when user login or signup succeeds', () => {
    nock('http://localhost/')
      .post('/api/session')
      .reply(200, {id: 1, username: 'pr0p4n3'});

    nock('http://localhost/')
      .post('/api/session')
      .reply(200, {id: 1, username: 'pr0p4n3'});

    const expectedActions = [
      { type: actions.RECEIVE_CURRENT_USER, currentUser: {data: {id: 1, username: 'pr0p4n3'}, "headers": {"content-type": "application/json"}, "status": 200 } }
    ]
    const store = mockStore({ currentUser: null })

    return store.dispatch(actions.login())
      .then(() => { // return of async actions
        expect(store.getActions()).to.eql(expectedActions)
      })
    return store.dispatch(actions.signup())
      .then(() => { // return of async actions
        expect(store.getActions()).to.eql(expectedActions)
      })
  })
})
