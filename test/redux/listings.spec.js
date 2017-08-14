import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import * as actions from '../../frontend/actions/listings';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('sync actions for listings', () => {
  it('clearListing should create an action to clear the current listing form store', () => {
    const expectedAction = {
      type: actions.CLEAR_LISTING,
    }
    expect(actions.clearListing()).to.eql(expectedAction);
  })
})

describe('async actions for listings', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates RECEIVE_LISTINGS when fetchListings finishes', () => {
    nock('http://localhost/')
      .get('/api/listings')
      .reply(200, {id: 1, username: 'pr0p4n3'});

    const expectedActions = [
      { type: actions.RECEIVE_LISTINGS, listings: {data: {id: 1, username: 'pr0p4n3'}, "headers": {"content-type": "application/json"}, "status": 200 } }
    ]
    const store = mockStore({ listings: null })

    return store.dispatch(actions.fetchListings())
      .then(() => { // return of async actions
        expect(store.getActions()).to.eql(expectedActions)
      })
  })
  it('creates RECEIVE_LISTING when fetchListing finishes', () => {
    nock('http://localhost/')
      .get('/api/listings/1')
      .reply(200, {id: 1, username: 'pr0p4n3'});

    const expectedActions = [
      { type: actions.RECEIVE_LISTING, listing: {data: {id: 1, username: 'pr0p4n3'}, "headers": {"content-type": "application/json"}, "status": 200 } }
    ]
    const store = mockStore({ listings: null })

    return store.dispatch(actions.fetchListing(1))
      .then(() => { // return of async actions
        expect(store.getActions()).to.eql(expectedActions)
      })
  })
})
