import Actions from '../../reducers/actions';
import createReduxAction from '../create-redux-action';

export const toggleConfirm = data => ({ type: Actions.login.toggleConfirm, data });
export const swapConfrm = createReduxAction(Actions.login.swapConfirm);
