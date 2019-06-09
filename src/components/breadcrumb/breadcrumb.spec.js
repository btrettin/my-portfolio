import React from 'react';
import { shallow } from 'enzyme';
import Grid from '@material-ui/core/Grid';
import each from 'jest-each';
import BreadcrumbComponent from './';
import Step from './breadcrumb-step';

const renderComponent = () => shallow(<BreadcrumbComponent />);
const wrapper = renderComponent();
console.log(wrapper);
describe('describe', () => {
  each([
    [wrapper, Grid],
    [wrapper.childAt(0), Step],
    [wrapper.childAt(1), Step],
    [wrapper.childAt(2), Step],
    [wrapper.childAt(3), Step],
    [wrapper.childAt(4), Step],
  ]).test('is wrapped in the correct wrapper', (givenWrapper, expectedType) => {
    expect(givenWrapper.type()).toEqual(expectedType);
  });
});
