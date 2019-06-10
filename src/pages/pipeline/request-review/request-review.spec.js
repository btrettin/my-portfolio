import React from 'react';
import { shallow } from 'enzyme';
import Grid from '@material-ui/core/Grid';
import RequestReviewComponent from './';
import BreadcrumbComponent from '../../../components/breadcrumb';

describe('RequestReview', () => {
  let wrapper;

  const renderComponent = () =>
    shallow(<RequestReviewComponent typeOfRequest="Lawn Mowing" pageInProgress={4} current={4} />);

  beforeEach(() => {
    wrapper = renderComponent();
  });

  it('is wrapped in a Grid Container', () => {
    expect(wrapper.type()).toEqual(Grid);
  });

  it('contains three rows', () => {
    expect.assertions(3);

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
        expect(Breadcrumb.props().selection).toEqual(4);
      });
    });
  });

  describe('DynamicDisplay Row', () => {
    let dynamicDisplayRow;

    beforeEach(() => {
      dynamicDisplayRow = wrapper.childAt(1);
    });

    it('It is a row', () => {
      expect(dynamicDisplayRow.type()).toEqual(Grid);
    });

    describe('It contains a DynamicDisplay Component', () => {
      let dynamicDisplayRowComponent;

      beforeEach(() => {
        dynamicDisplayRowComponent = dynamicDisplayRow.childAt(0);
      });

      it('is a dynamic display component', () => {
        expect(dynamicDisplayRowComponent.type()).toEqual('div');
      });
    });
  });
  describe('Submit Row', () => {
    let submitRow;

    beforeEach(() => {
      submitRow = wrapper.childAt(2);
    });

    it('It is a row', () => {
      expect(submitRow.type()).toEqual(Grid);
    });
  });
});
