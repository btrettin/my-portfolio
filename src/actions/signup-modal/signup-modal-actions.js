import Actions from '../../reducers/actions';
import createReduxAction from '../create-redux-action';

export const toggleSignupModal = createReduxAction(Actions.login.toggleSignupModal);
export const swapModal = createReduxAction(Actions.login.swapModal);
