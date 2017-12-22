import React from 'react';
import HomePage from '../index';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Home Page', () => {
  it('should render propery', () => {
    const homePage = shallow(<HomePage />);
    expect(toJson(homePage)).toMatchSnapshot();
  });
});
