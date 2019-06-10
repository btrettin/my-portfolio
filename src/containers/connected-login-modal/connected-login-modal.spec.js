import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import LoginModal from './';

describe('Connected Login Modal', () => {
  let store;

  beforeEach(() => {
    const state = {
      login: {
        isLoginModalOpen: false,
      },
    };

    const mockStore = configureStore();
    store = mockStore(state);
  });

  it('has the correct props', () => {
    const wrapper = shallow(<LoginModal store={store} />);

    const dispatchProps = ['toggleLoginModal', 'swapModal'];

    dispatchProps.forEach((prop) => {
      expect(wrapper.props()[prop]).toEqual(expect.any(Function));
    });
  });
});
