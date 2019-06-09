import Actions from '../../reducers/actions';
import createReduxAction from '../create-redux-action';

const setLoggedIn = createReduxAction(Actions.login.isLoggedIn);
export default setLoggedIn;
