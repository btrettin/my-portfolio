import Actions from '../actions';

const getInitialState = () => ({
  user: null,
  isLoggedIn: false,
  isLoginOpen: false,
  isRegisterOpen: false,
  isResetPasswordOpen: false,
  isSnackbarOpen: false,
  isVerificationOpen: false,
});

const setState = (previousState, property, newValue) =>
  Object.assign({}, previousState, {
    [property]: newValue,
  });

export default (state = getInitialState(), action) => {
  switch (action.type) {
    case Actions.login.setUser:
      return setState(state, 'user', action.data);
    case Actions.login.setSnackbar:
      return setState(state, 'isSnackbarOpen', action.data);
    case Actions.login.setLoggedIn:
      return setState(state, 'isLoggedIn', action.data);
    case Actions.login.toggleLogin:
      return setState(state, 'isLoginOpen', !state.isLoginOpen);
    case Actions.login.toggleRegister:
      return setState(state, 'isRegisterOpen', !state.isRegisterOpen);
    case Actions.login.toggleVerification:
      return setState(state, 'isVerificationOpen', !state.isVerificationOpen);
    case Actions.login.toggleResetPassword:
      return setState(state, 'isResetPasswordOpen', false);
    case Actions.login.swapModal:
      return setState({
        isLoginOpen: !state.isLoginOpen,
        isRegisterOpen: !state.isRegisterOpen,
        isResetPasswordOpen: false,
        user: null,
        isLoggedIn: false,
        isSnackbarOpen: false,
        isVerificationOpen: false,
      });
    case Actions.login.swapResetPassword:
      return setState({
        isLoginOpen: !state.isLoginOpen,
        isResetPasswordOpen: !state.isResetPasswordOpen,
        isRegisterOpen: false,
        user: null,
        isLoggedIn: false,
        isSnackbarOpen: false,
        isVerificationOpen: false,
      });
    case Actions.login.swapVerification:
      return setState({
        isVerificationOpen: !state.isVerificationOpen,
        isResetPasswordOpen: !state.isResetPasswordOpen,
        isLoginOpen: false,
        isRegisterOpen: false,
        user: null,
        isLoggedIn: false,
        isSnackbarOpen: false,
      });
    default:
      return state;
  }
};
