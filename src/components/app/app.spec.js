import React from 'react';
import { shallow } from 'enzyme';
import App from './';
import Routes from '../../routes';

describe('App', () => {
  let wrapper;
  const renderComponent = () => shallow(<App />);

  beforeEach(() => {
    jest.mock('../../routes/routes');

    wrapper = renderComponent();
  });

  it('renders the routes component', () => {
    expect(wrapper.type()).toEqual(Routes);
  });
});
