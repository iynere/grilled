import * as actions from '../../frontend/actions/errors';

describe('sync actions for errors', () => {
  it('clearErrors should create an action to clear errors from store', () => {
    const expectedAction = {
      type: actions.CLEAR_ERRORS,
    }
    expect(actions.clearErrors()).to.eql(expectedAction)
  })
})
