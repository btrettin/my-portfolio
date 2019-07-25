import Actions from '../../reducers/actions';
import createReduxAction from '../create-redux-action';

export const toggleResetPassword = createReduxAction(Actions.login.toggleResetPassword);
export const setSnackbar = data => ({ type: Actions.login.setSnackbar, data });