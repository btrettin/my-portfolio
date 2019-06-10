import React from 'react';
import { shallow } from 'enzyme';
import Grid from '@material-ui/core/Grid';
import RequestSelectionComponent from './';
import BreadcrumbComponent from '../../../components/breadcrumb';
import RequestOptionComponent from './request-option';

describe('RequestSelection', () => {
  let wrapper;
  const setTypeOfRequest = jest.fn();
  const requestInProgress = jest.fn();
  const renderComponent = () =>
    shallow(
      <RequestSelectionComponent
        requestInProgress={requestInProgress}
        setTypeOfRequest={setTypeOfRequest}
      />,
    );

  beforeEach(() => {
    wrapper = renderComponent();
  });

  it('is wrapped in a Grid Container', () => {
    expect(wrapper.type()).toEqual(Grid);
  });

  it('is styled as a container Grid', () => {
    expect(wrapper.props().alignItems).toEqual('center');
  });

  describe('BreadcrumbRow', () => {
    let BreadcrumbRow;

    beforeEach(() => {
      BreadcrumbRow = wrapper.childAt(0);
    });

    it('is a Breadcrumb Row', () => {
      expect(BreadcrumbRow.type()).toEqual(Grid);
    });

    it('is styled as a Grid item', () => {
      expect(BreadcrumbRow.props().item).toBeTruthy();
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
        expect(Breadcrumb.props().selection).toEqual(0);
      });
    });
  });
  describe('HeaderSegment', () => {
    let HeaderSegment;

    beforeEach(() => {
      HeaderSegment = wrapper.childAt(1);
    });

    it('is a Header Segment', () => {
      expect(HeaderSegment.type()).toEqual(Grid);
    });

    describe('Header', () => {
      let header;

      beforeEach(() => {
        header = HeaderSegment.childAt(0);
      });

      it('is a Header', () => {
        expect(header.type()).toEqual('h1');
      });

      describe('SubHeader', () => {
        let subHeader;

        beforeEach(() => {
          subHeader = HeaderSegment.childAt(1);
        });

        it('is a SubHeader', () => {
          expect(subHeader.type()).toEqual('h3');
        });
      });
    });
  });
  describe('LawnMowingSegment', () => {
    let LawnMowingSegment;

    beforeEach(() => {
      LawnMowingSegment = wrapper.childAt(2);
    });

    it('is a LawnMowing Segment', () => {
      expect(LawnMowingSegment.type()).toEqual(Grid);
    });

    describe('LawnMowingComponent', () => {
      let LawnMowingComponent;

      beforeEach(() => {
        LawnMowingComponent = LawnMowingSegment.childAt(0);
      });

      it('is a LawnMowing', () => {
        expect(LawnMowingComponent.type()).toEqual(RequestOptionComponent);
      });
      it('has the correct title', () => {
        expect(LawnMowingComponent.props().title).toEqual('Lawn Mowing');
      });
      it('has an imageURL', () => {
        expect(LawnMowingComponent.props().imageURL).toBeTruthy();
      });
      it('has a onClick that uses function from redux', () => {
        LawnMowingComponent.props().onClick();
        expect(requestInProgress.mock.calls.length).toBe(1);
        expect(setTypeOfRequest.mock.calls.length).toBe(1);
      });
    });
  });
});
