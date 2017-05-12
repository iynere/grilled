import React from 'react';
import { shallow } from 'enzyme';
import Index from '../frontend/components/messaging/message_tile';

const setup = () => {
  const props = {
    user: 'pr0p4n3',
    body: 'SELL IT TO ME!',
    age: '1 Minute',
  };


  const wrapper = shallow(<Index {...props} />)

  return {
    props,
    wrapper,
  }
};

describe('<MessageTile />', () => {

  it('should render a message tile with expected values', () => {
    const { wrapper, props } = setup();
    expect(wrapper.find('strong').text()).to.eq(props.user);
    expect(wrapper.find('p').text()).to.eq(props.body);
    expect(wrapper.find('span').text()).to.eq(`${props.age} Ago`);
  })
});
