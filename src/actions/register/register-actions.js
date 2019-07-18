import Actions from '../../reducers/actions';
import createReduxAction from '../create-redux-action';

export const toggleRegister = createReduxAction(Actions.login.toggleRegister);
export const swapModal = createReduxAction(Actions.login.swapModal);
