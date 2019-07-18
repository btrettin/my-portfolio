import Actions from '../actions';

const getInitialState = () => ({
  isLoggedIn: false,
  isLoginOpen: false,
  isRegisterOpen: false,
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
    case Actions.login.toggleLogin:
      return setState(state, 'isLoginOpen', !state.isLoginOpen);
    case Actions.login.toggleRegister:
      return setState(state, 'isRegisterOpen', !state.isRegisterOpen);
    case Actions.login.swapModal:
      return setState({
        isLoginOpen: !state.isLoginOpen,
        isRegisterOpen: !state.isRegisterOpen,
      });
    default:
      return state;
  }
};
