import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import RequestLocation from './';

describe('Connected RequestLocation Page', () => {
  let store;

  beforeEach(() => {
    const state = {
      requests: {
        selection: 'Lawn Mowing',
        requestInProgress: 2,
      },
    };

    const mockStore = configureStore();
    store = mockStore(state);
  });

  it('has the correct props', () => {
    const wrapper = shallow(<RequestLocation store={store} />);

    const dispatchProps = ['requestInProgress'];

    dispatchProps.forEach((prop) => {
      expect(wrapper.props()[prop]).toEqual(expect.any(Function));
    });
  });
});
