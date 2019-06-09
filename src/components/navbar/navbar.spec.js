import React from 'react';
import { Link } from 'react-router-dom';
import { shallow } from 'enzyme';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import NavBar from './';
import Sidebar from './sidebar';
import LoginModalComponent from '../../containers/connected-login-modal';
import SignupModalComponent from '../../containers/connected-signup-modal';

describe('navBar', () => {
  let wrapper;

  const renderComponent = () => shallow(<NavBar isLoggedIn={false} />);

  beforeEach(() => {
    wrapper = renderComponent();
  });

  it('is an app bar', () => {
    expect(wrapper.type()).toEqual(AppBar);
  });

  describe('leftnav container', () => {
    let leftnavContainer;

    beforeEach(() => {
      leftnavContainer = wrapper.childAt(0);
    });

    it('is a div', () => {
      expect(leftnavContainer.type()).toEqual('div');
    });
    describe('sidebar', () => {
      let sidebar;

      beforeEach(() => {
        sidebar = leftnavContainer.childAt(0);
      });

      it('is a sidebar', () => {
        expect(sidebar.type()).toEqual(Sidebar);
      });
    });
    describe('link', () => {
      let link;

      beforeEach(() => {
        link = leftnavContainer.childAt(1);
      });

      it('is a link', () => {
        expect(link.type()).toEqual(Link);
      });
      describe('home button', () => {
        let homeButton;

        beforeEach(() => {
          homeButton = link.childAt(0);
        });

        it('is a icon button', () => {
          expect(homeButton.type()).toEqual(IconButton);
        });
      });
    });
  });
  describe('right nav contianer', () => {
    let rightnavContainer;

    beforeEach(() => {
      rightnavContainer = wrapper.childAt(1);
    });

    it('is a div', () => {
      expect(rightnavContainer.type()).toEqual('div');
    });
    describe('loginModal', () => {
      let loginModal;

      beforeEach(() => {
        loginModal = rightnavContainer.childAt(0);
      });

      it('is a login modal', () => {
        expect(loginModal.type()).toEqual(LoginModalComponent);
      });
    });
    describe('signupModal', () => {
      let signupModal;

      beforeEach(() => {
        signupModal = rightnavContainer.childAt(1);
      });

      it('is a signup modal', () => {
        expect(signupModal.type()).toEqual(SignupModalComponent);
      });
    });
  });
});
