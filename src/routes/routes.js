import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { withRouter } from 'react-router';
import thunk from 'redux-thunk';
import { Auth } from 'aws-amplify';
import { Error404 } from '../components/errors';
import HomePageComponent from '../pages/homepage';
import App from '../components/app';
import Navbar from '../containers/connected-navbar';
import RequestPageComponent from '../pages/request-page';
import AccountPageComponent from '../pages/account-page';
import Footer from '../components/footer';
import reducers from '../reducers';
import styles from '../components/app/app.module.css';

export const Routes = () => {
  const [store] = useState(createStore(reducers, applyMiddleware(thunk)));
  async function authenticate() {
    try {
      const session = await Auth.currentSession();
      console.log(session);
      const user = await Auth.currentAuthenticatedUser();
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  }
  store.subscribe(() => {
    console.log('store.getState()', store.getState());
  });
  useEffect(() => {
    authenticate();
    console.log('useEffect');
  });
  return (
    <Provider store={store}>
      <BrowserRouter className="router">
        <Route
          render={() => (
            <div className={styles.div}>
              <NavbarWithRouter />
              <Switch>
                <Route exact path="/test" component={App} />
                <Route exact path="/HomePage" component={HomePageComponent} />
                <Route exact path="/RequestPage" component={RequestPageComponent} />
                <Route exact path="/AccountPage" component={AccountPageComponent} />
                <Route path="/*" component={Error404} />
              </Switch>
              <Footer />
            </div>
          )}
        />
      </BrowserRouter>
    </Provider>
  );
};
const NavbarWithRouter = withRouter(Navbar);
export default Routes;
