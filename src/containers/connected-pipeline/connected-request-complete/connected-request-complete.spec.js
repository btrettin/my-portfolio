import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import RequestComplete from './';

describe('Connected RequestInformation Page', () => {
  let store;

  beforeEach(() => {
    const state = {
      requests: {
        requestInProgress: 5,
      },
    };

    const mockStore = configureStore();
    store = mockStore(state);
  });

  it('has the correct props', () => {
    const wrapper = shallow(<RequestComplete store={store} />);

    const dispatchProps = [];

    dispatchProps.forEach((prop) => {
      expect(wrapper.props()[prop]).toEqual(expect.any(Function));
    });
  });
});
