import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Navbar from './';

describe('Connected Navbar', () => {
  let store;

  beforeEach(() => {
    const state = {
      login: {
        isLoggedIn: false,
        user: null,
      },
    };

    const mockStore = configureStore();
    store = mockStore(state);
  });

  it('has the correct props', () => {
    const wrapper = shallow(<Navbar store={store} />);

    const dispatchProps = ['setLoggedIn', 'setUser'];

    dispatchProps.forEach((prop) => {
      expect(wrapper.props()[prop]).toEqual(expect.any(Function));
    });
  });
});
