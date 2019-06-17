import React from 'react';
import ReactDOM from 'react-dom';
import * as TestUtils from 'react-dom/test-utils';
import CheckboxWithLabel from './index';

it('CheckboxWithLabel changes the text after click', () => {
  
  // Render a checkbox with label in the document
  const checkbox = TestUtils.renderIntoDocument(
    <CheckboxWithLabel />
  );

  const checkboxNode = ReactDOM.findDOMNode(checkbox);

  // Verify that it's Off by default
  expect(checkboxNode.textContent).toEqual('Off');

  // Simulate a click and verify that it is now On
  TestUtils.Simulate.change(
    TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input')
  );
  expect(checkboxNode.textContent).toEqual('On');
});

/* 
  Note: Check @testing-library/react for testing react components
  Examples: https://codesandbox.io/s/github/kentcdodds/react-testing-library-examples
*/

/** 
 * Testing with enzyme
*/
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

it('CheckboxWithLabel changes the text after click', () => {
  // Render a checkbox with label in the document
  const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />);

  expect(checkbox.text()).toEqual('Off');

  checkbox.find('input').simulate('change');

  expect(checkbox.text()).toEqual('On');
});