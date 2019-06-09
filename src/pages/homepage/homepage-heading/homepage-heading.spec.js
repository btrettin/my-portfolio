import React from 'react';
import { shallow } from 'enzyme';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import HomePageHeading from './';

describe('Home Page', () => {
  let wrapper;

  const renderComponent = () => shallow(<HomePageHeading />);

  beforeEach(() => {
    wrapper = renderComponent();
  });

  it('is wrapped in a Grid', () => {
    expect(wrapper.type()).toEqual(Grid);
  });
  describe('shadowRow', () => {
    let shadowRow;

    beforeEach(() => {
      shadowRow = wrapper.childAt(0);
    });

    it('is a shadow Row', () => {
      expect(shadowRow.type()).toEqual(Grid);
    });
    describe('header container', () => {
      let headerContainer;

      beforeEach(() => {
        headerContainer = shadowRow.childAt(0);
      });

      it('is a grid', () => {
        expect(headerContainer.type()).toEqual(Grid);
      });
      describe('header', () => {
        let header;

        beforeEach(() => {
          header = headerContainer.childAt(0);
        });

        it('is a h1', () => {
          expect(header.type()).toEqual('h1');
        });
      });
    });
    describe('button Container', () => {
      let buttonContainer;

      beforeEach(() => {
        buttonContainer = shadowRow.childAt(1);
      });

      it('is a grid', () => {
        expect(buttonContainer.type()).toEqual(Grid);
      });
      describe('button', () => {
        let button;

        beforeEach(() => {
          button = buttonContainer.childAt(0).childAt(0);
        });

        it('is a grid', () => {
          expect(button.type()).toEqual(Button);
        });
      });
    });
  });
});
