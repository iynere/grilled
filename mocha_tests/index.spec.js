import React from 'react';
import { shallow } from 'enzyme';
import Index from '../frontend/components/index/index';

describe('<index />', () => {
  it('renders an h1 with text hello', () => {
    const wrapper = shallow(<Index />);
    expect(wrapper.find('h1').text()).to.eql('Hello')
  })
});
