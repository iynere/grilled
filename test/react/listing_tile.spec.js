import React from 'react';
import { shallow } from 'enzyme';
import ListingTile from '../../frontend/components/listings/listing_tile';

const setup = () => {
  const props = {
    listing: {
      name: 'Tote Bag',
      brand: 'Rick Owens',
      price: 100,
    },
  };

  const wrapper = shallow(<ListingTile {...props} />);

  return {
    props,
    wrapper,
  }
};

describe('<ListingTile />', () => {

  it('renders a listing tile with correct values', () => {
    const { wrapper, props } = setup();
    expect(wrapper.find('h4').text()).to.eql(props.listing.name);
    expect(wrapper.find('span').text()).to.eql(props.listing.brand);
    expect(wrapper.find('strong').text()).to.include(props.listing.price);
  })
});
