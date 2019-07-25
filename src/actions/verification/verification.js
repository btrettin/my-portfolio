import Actions from '../../reducers/actions';
import createReduxAction from '../create-redux-action';

export const toggleVerification = createReduxAction(Actions.login.toggleVerification);
export const swapVerification = createReduxAction(Actions.login.swapVerification);
export const setSnackbar = data => ({ type: Actions.login.setSnackbar, data });
