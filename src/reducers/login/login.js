import Actions from '../actions';

const getInitialState = () => ({
  user: null,
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
    case Actions.login.setUser:
      return setState(state, 'user', action.data);
    case Actions.login.setLoggedIn:
      return setState(state, 'isLoggedIn', action.data);
    case Actions.login.toggleLogin:
      return setState(state, 'isLoginOpen', !state.isLoginOpen);
    case Actions.login.toggleRegister:
      return setState(state, 'isRegisterOpen', !state.isRegisterOpen);
    case Actions.login.swapModal:
      return setState({
        isLoginOpen: !state.isLoginOpen,
        isRegisterOpen: !state.isRegisterOpen,
        user: null,
        isLoggedIn: false,
      });
    default:
      return state;
  }
};
