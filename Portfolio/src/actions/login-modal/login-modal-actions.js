import Actions from '../../reducers/actions';
import createReduxAction from '../create-redux-action';

export const toggleLoginModal = createReduxAction(Actions.login.toggleLoginModal);
export const swapModal = createReduxAction(Actions.login.swapModal);
