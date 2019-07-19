import Actions from '../../reducers/actions';

export const setLoggedIn = data => ({ type: Actions.login.setLoggedIn, data });
export const setUser = data => ({ type: Actions.login.setUser, data });
