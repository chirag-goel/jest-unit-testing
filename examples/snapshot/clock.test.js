'use strict';

import React from 'react';
import Clock from './clock';
import renderer from 'react-test-renderer';

// This mocks out setTimeout and other timer functions with mock functions.
jest.useFakeTimers();
Date.now = jest.fn(() => 1482363367071);

it('renders correctly', () => {
  const tree = renderer.create(<Clock />).toJSON();
  expect(tree).toMatchSnapshot();
});