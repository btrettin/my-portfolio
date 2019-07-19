import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
import { CookiesProvider } from 'react-cookie';
import config from './config.json';
import App from './components/app';

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID,
  },
});
ReactDOM.render(
  <CookiesProvider>
    <App />\
  </CookiesProvider>,
  document.getElementById('root'),
);
