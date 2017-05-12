import React from 'react';
import { shallow } from 'enzyme';
import Index from '../frontend/components/header/header';

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

describe('<Header />', () => {

  jsdom();

  it('should render expected text inside #menu section when logged out', () => {
    const { notLoggedInWrapper } = setup();
    expect(notLoggedInWrapper.find('#menu').text()).to.eql('High-End BBQ Marketplace');
  })

  it('should render username and menu when logged in', () => {
    const { loggedInWrapper, propsLoggedIn } = setup();
    expect(loggedInWrapper.find('#menu nav span').text()).to.eql(propsLoggedIn.currentUser.username);
    expect(loggedInWrapper.find('#menu nav a')).to.exist
    expect(loggedInWrapper.find('#menu nav button')).to.exist
  })
});
