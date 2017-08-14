import React from 'react';
import { shallow } from 'enzyme';
import { shallowWithStore } from 'enzyme-redux';
import { createMockStore } from 'redux-test-utils';
import { connect } from 'react-redux';

import Header from '../../frontend/components/header/header';
import { mapStateToProps } from '../../frontend/components/header/header_container';

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

  const loggedInWrapper = shallow(<Header {...propsLoggedIn} />)
  const notLoggedInWrapper = shallow(<Header {...propsNotLoggedIn} />)

  return {
    propsLoggedIn,
    propsNotLoggedIn,
    loggedInWrapper,
    notLoggedInWrapper,
  }
};

describe('<Header />', () => {

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

describe('Header Container', () => {
  const ReactComponent = () => (<Header />);
  describe('mapStateToProps', () => {
    it('works', () => {
      const expectedState = {
        session: {
          currentUser: {
            username: 'pr0p4n3',
            id: 1,
          }
        }
      };
      const ConnectedComponent = connect(mapStateToProps)(ReactComponent);
      const component = shallowWithStore(<ConnectedComponent />, createMockStore(expectedState));
      expect(component.props().currentUser).to.eql(expectedState.session.currentUser);
    });
  });
});
