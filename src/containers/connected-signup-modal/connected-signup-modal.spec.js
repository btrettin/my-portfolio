import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import SignupModal from './';

describe('Connected Login Modal', () => {
  let store;

  beforeEach(() => {
    const state = {
      login: {
        isSignupModalOpen: false,
      },
    };

    const mockStore = configureStore();
    store = mockStore(state);
  });

  it('has the correct props', () => {
    const wrapper = shallow(<SignupModal store={store} />);

    const dispatchProps = ['toggleSignupModal', 'swapModal'];

    dispatchProps.forEach((prop) => {
      expect(wrapper.props()[prop]).toEqual(expect.any(Function));
    });
  });
});
