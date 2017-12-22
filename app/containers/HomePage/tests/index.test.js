import React from 'react';
import renderer from 'react-test-renderer';
import HomePage from '../index';

describe('Home Page', () => {
  it('should render propery', () => {
    const homePage = renderer.create(<HomePage />).toJson();
    expect(homePage).toMatchSnapshot();
  });
});
