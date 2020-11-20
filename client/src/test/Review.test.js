import React from 'react';
import { shallow } from 'enzyme';
import Reviews from '../components/Reviews/Review.jsx';

describe('Review', () => {
  it('renders a <Review> object', () => {
    const wrapper = shallow(<Reviews />);
    expect(wrapper.type().toBe('div'));
  });
});