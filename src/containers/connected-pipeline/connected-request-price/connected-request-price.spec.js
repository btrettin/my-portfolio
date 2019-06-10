import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import RequestPrice from './';

describe('Connected RequestInformation Page', () => {
  let store;

  beforeEach(() => {
    const state = {
      requests: {
        selection: 'Lawn Mowing',
        requestInProgress: 3,
        requestPrice: 1,
      },
    };

    const mockStore = configureStore();
    store = mockStore(state);
  });

  it('has the correct props', () => {
    const wrapper = shallow(<RequestPrice store={store} />);

    const dispatchProps = ['setRequestPrice', 'requestInProgress'];

    dispatchProps.forEach((prop) => {
      expect(wrapper.props()[prop]).toEqual(expect.any(Function));
    });
  });
});
