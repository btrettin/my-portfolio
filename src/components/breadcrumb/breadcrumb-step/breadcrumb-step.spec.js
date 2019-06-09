import React from 'react';
import { Link } from 'react-router-dom';
import { shallow } from 'enzyme';
import Grid from '@material-ui/core/Grid';
import SvgIcon from '@material-ui/core/SvgIcon';
import StepComponent from './';

describe('step', () => {
  let wrapper;

  const renderComponent = () =>
    shallow(<StepComponent value={2} name="Selection" link="/pipeline" />);

  beforeEach(() => {
    wrapper = renderComponent();
  });

  it('is a link', () => {
    expect(wrapper.type()).toEqual(Link);
  });
  describe('information column', () => {
    let informationColumn;

    beforeEach(() => {
      informationColumn = wrapper.childAt(0);
    });

    it('is a grid', () => {
      expect(informationColumn.type()).toEqual(Grid);
    });
    describe('icon', () => {
      let icon;

      beforeEach(() => {
        icon = informationColumn.childAt(0).childAt(0);
      });
      it('is a icon', () => {
        expect(icon.type()).toEqual(SvgIcon);
      });
    });
    describe('bars', () => {
      let label;

      beforeEach(() => {
        label = informationColumn.childAt(1);
      });

      it('is a div', () => {
        expect(label.type()).toEqual('div');
      });
    });
    describe('label', () => {
      let label;

      beforeEach(() => {
        label = informationColumn.childAt(2);
      });

      it('is a label', () => {
        expect(label.type()).toEqual('h2');
      });
    });
  });
});
