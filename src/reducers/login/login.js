import Actions from '../actions';

const getInitialState = () => ({
  isLoggedIn: false,
  isLoginModalOpen: false,
  isSignupModalOpen: false,
});

const setState = (previousState, property, newValue) =>
  Object.assign({}, previousState, {
    [property]: newValue,
  });

export default (state = getInitialState(), action) => {
  switch (action.type) {
    case Actions.login.login:
      return setState(state, 'loginDetails', action.data);
    case Actions.login.signup:
      return setState(state, 'signupDetails', action.data);
    case Actions.login.isLoggedIn:
      return setState(state, 'isLoggedIn', !state.isLoggedIn);
    case Actions.login.toggleLoginModal:
      return setState(state, 'isLoginModalOpen', !state.isLoginModalOpen);
    case Actions.login.toggleSignupModal:
      return setState(state, 'isSignupModalOpen', !state.isSignupModalOpen);
    case Actions.login.swapModal:
      return setState({
        isLoginModalOpen: !state.isLoginModalOpen,
        isSignupModalOpen: !state.isSignupModalOpen,
      });
    default:
      return state;
  }
};
