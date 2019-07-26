import Actions from '../../reducers/actions';
import createReduxAction from '../create-redux-action';

export const toggleRegister = createReduxAction(Actions.login.toggleRegister);
export const swapModal = createReduxAction(Actions.login.swapModal);
export const setLoggedIn = data => ({ type: Actions.login.setLoggedIn, data });
export const setUser = data => ({ type: Actions.login.setUser, data });
export const swapConfirm = createReduxAction(Actions.login.swapConfirm);
