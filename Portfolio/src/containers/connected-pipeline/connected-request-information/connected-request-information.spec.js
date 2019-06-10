import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import RequestInformation from './';

describe('Connected RequestInformation Page', () => {
  let store;

  beforeEach(() => {
    const state = {
      requests: {
        selection: 'Lawn Mowing',
        requestInProgress: 1,
      },
    };

    const mockStore = configureStore();
    store = mockStore(state);
  });

  it('has the correct props', () => {
    const wrapper = shallow(<RequestInformation store={store} />);

    const dispatchProps = ['requestInProgress'];

    dispatchProps.forEach((prop) => {
      expect(wrapper.props()[prop]).toEqual(expect.any(Function));
    });
  });
});
