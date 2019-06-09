import { combineReducers } from 'redux';
import { sessionReducer as session } from 'redux-react-session';
import login from './login';
import requests from './requests';

export default combineReducers({
  requests,
  login,
  session,
});
