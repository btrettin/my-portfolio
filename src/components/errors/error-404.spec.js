import React from 'react';
import { Redirect } from 'react-router';
import { shallow } from 'enzyme';
import { Error404 } from '.';

describe('404 Error', () => {
  let wrapper;

  const renderComponent = () => shallow(<Error404 />);

  beforeEach(() => {
    wrapper = renderComponent();
  });

  it('is a reidrect', () => {
    expect(wrapper.type()).toEqual(Redirect);
  });
});
