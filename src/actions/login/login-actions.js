import Actions from '../../reducers/actions';
import createReduxAction from '../create-redux-action';

export const toggleLogin = createReduxAction(Actions.login.toggleLogin);
export const swapModal = createReduxAction(Actions.login.swapModal);