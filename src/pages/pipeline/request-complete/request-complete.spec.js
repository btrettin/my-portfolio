import React from 'react';
import { shallow } from 'enzyme';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import RequestCompleteComponent from './';

describe('Request Complete', () => {
  let wrapper;
  const push = jest.fn();

  const renderComponent = () =>
    shallow(<RequestCompleteComponent history={{ push }} pageInProgress={5} current={5} />);

  beforeEach(() => {
    wrapper = renderComponent();
  });

  it('is wrapped in a Grid Container', () => {
    expect(wrapper.type()).toEqual(Grid);
  });

  it('contains two rows', () => {
    expect.assertions(2);

    const GridRows = wrapper.children();

    GridRows.forEach((row) => {
      expect(row.type()).toEqual(Grid);
    });
  });

  describe('complete row', () => {
    let CompleteRow;

    beforeEach(() => {
      CompleteRow = wrapper.childAt(0);
    });

    it('is a Complete Row', () => {
      expect(CompleteRow.type()).toEqual(Grid);
    });
    describe('header', () => {
      let header;

      beforeEach(() => {
        header = CompleteRow.childAt(0);
      });

      it('is a header', () => {
        expect(header.type()).toEqual('h1');
      });
    });
  });
  describe('button row', () => {
    let ButtonRow;

    beforeEach(() => {
      ButtonRow = wrapper.childAt(1);
    });

    it('is a button Row', () => {
      expect(ButtonRow.type()).toEqual(Grid);
    });
    describe('button ', () => {
      let button;

      beforeEach(() => {
        button = ButtonRow.childAt(0).childAt(0);
      });

      it('is a button Row', () => {
        expect(button.type()).toEqual(Button);
      });

      it('button onClick should be clicked', () => {
        button.props().onClick();
        expect(push.mock.calls.length).toBe(1);
      });
    });
  });
});
