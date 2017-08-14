import React from 'react';
import { shallow } from 'enzyme';
import Index from '../../frontend/components/index/index';

const setup = () => {
  const propsLoggedIn = {
    currentUser: {
      username: 'pr0p4n3',
      id: 1,
    },
  };
  const propsNotLoggedIn = {
    currentUser: null,
  };

  const loggedInWrapper = shallow(<Index {...propsLoggedIn} />)
  const notLoggedInWrapper = shallow(<Index {...propsNotLoggedIn} />)

  return {
    propsLoggedIn,
    propsNotLoggedIn,
    loggedInWrapper,
    notLoggedInWrapper,
  }
};

describe('<Index />', () => {

  it('should render AuthForm when not logged in', () => {
    const { notLoggedInWrapper } = setup();
    expect(notLoggedInWrapper.find('AuthForm')).to.exist;
  })

  it('should render container div when logged in', () => {
    const { loggedInWrapper } = setup();
    expect( loggedInWrapper.find('.container Listings')).to.exist;
  })
});
