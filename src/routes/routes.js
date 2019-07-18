import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { sessionService } from 'redux-react-session';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { Error404 } from '../components/errors';
import HomePageComponent from '../pages/homepage';
import App from '../components/app';
import Navbar from '../components/navbar';
import reducers from '../reducers';
import styles from '../components/app/app.module.css';

export const Routes = () => {
  const [store] = useState(createStore(reducers, applyMiddleware(thunk)));
  sessionService.initSessionService(store);
  store.subscribe(() => {
    console.log('store.getState()', store.getState());
  });
  return (
    <Provider store={store}>
      <BrowserRouter className="router">
        <Route
          render={() => (
            <div className={styles.font}>
              <div className={styles.div}>
                <Navbar />
                <Switch>
                  <Route exact path="/test" component={App} />
                  <Route exact path="/HomePage" component={HomePageComponent} />
                  <Route path="/*" component={Error404} />
                </Switch>
              </div>
            </div>
          )}
        />
      </BrowserRouter>
    </Provider>
  );
};
export default Routes;
