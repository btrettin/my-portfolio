import { combineReducers } from 'redux';
import { sessionReducer as session } from 'redux-react-session';
import login from './login';

export default combineReducers({
  login,
  session,
});
