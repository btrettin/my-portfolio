import React from 'react';
import { shallow } from 'enzyme';
import Grid from '@material-ui/core/Grid';
import RequestLocationComponent from './';
import BreadcrumbComponent from '../../../components/breadcrumb';

describe('RequestInformation', () => {
  let wrapper;

  const renderComponent = () =>
    shallow(
      <RequestLocationComponent typeOfRequest="Lawn Mowing" pageInProgress={2} current={2} />,
    );

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

  describe('BreadcrumbRow', () => {
    let BreadcrumbRow;

    beforeEach(() => {
      BreadcrumbRow = wrapper.childAt(0);
    });

    it('is a Breadcrumb Row', () => {
      expect(BreadcrumbRow.type()).toEqual(Grid);
    });

    describe('BreadcrumbComponent', () => {
      let Breadcrumb;

      beforeEach(() => {
        Breadcrumb = BreadcrumbRow.childAt(0);
      });

      it('is a breadcrumb', () => {
        expect(Breadcrumb.type()).toEqual(BreadcrumbComponent);
      });
      it('has a selection', () => {
        expect(Breadcrumb.props().selection).toEqual(2);
      });
    });
  });

  describe('FormRow', () => {
    let FormRow;

    beforeEach(() => {
      FormRow = wrapper.childAt(1);
    });

    it('is a Form Row', () => {
      expect(FormRow.type()).toEqual(Grid);
    });
  });
});
