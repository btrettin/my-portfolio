import Actions from '../../reducers/actions';
import createReduxAction from '../create-redux-action';

export const toggleLogin = createReduxAction(Actions.login.toggleLogin);
export const swapModal = createReduxAction(Actions.login.swapModal);
export const setLoggedIn = data => ({ type: Actions.login.setLoggedIn, data });
export const setUser = data => ({ type: Actions.login.setUser, data });
