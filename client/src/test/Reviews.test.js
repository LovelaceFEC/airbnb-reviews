import React from 'react';
import { shallow } from 'enzyme';
import Reviews from '../components/Reviews/Reviews.jsx';

describe('Reviews', () => {
  it('renders a <Reviews> object', () => {
    const wrapper = shallow(<Reviews />);
    expect(wrapper.type().toBe('div'));
  });
});