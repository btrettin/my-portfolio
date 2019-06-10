import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { sessionService } from 'redux-react-session';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { Error404 } from '../components/errors';
import ConnectedNavBarComponent from '../containers/connected-navbar';
import ConnectedRequestSelection from '../containers/connected-pipeline/connected-request-selection';
import ConnectedRequestInformationComponent from '../containers/connected-pipeline/connected-request-information';
import ConnectedRequestLocationComponent from '../containers/connected-pipeline/connected-request-location';
import ConnectedRequestPriceComponent from '../containers/connected-pipeline/connected-request-price';
import ConnectedRequestReviewComponent from '../containers/connected-pipeline/connected-request-review';
import ConnectedRequestCompleteComponent from '../containers/connected-pipeline/connected-request-complete';
import HomePageComponent from '../pages/homepage';
import App from '../components/app';
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
            <div className={styles.div}>
              <ConnectedNavBarComponent className={styles.navBar} />
              <Switch>
                <Route exact path="/test" component={App} />
                <Route exact path="/pipeline" component={ConnectedRequestSelection} />
                <Route exact path="/HomePage" component={HomePageComponent} />
                <Route
                  exact
                  path="/pipeline/requestInformation"
                  component={ConnectedRequestInformationComponent}
                />
                <Route
                  exact
                  path="/pipeline/requestLocation"
                  component={ConnectedRequestLocationComponent}
                />
                <Route
                  exact
                  path="/pipeline/requestPrice"
                  component={ConnectedRequestPriceComponent}
                />
                <Route
                  exact
                  path="/pipeline/requestReview"
                  component={ConnectedRequestReviewComponent}
                />
                <Route
                  exact
                  path="/pipeline/requestComplete"
                  component={ConnectedRequestCompleteComponent}
                />
                <Route path="/*" component={Error404} />
              </Switch>
            </div>
          )}
        />
      </BrowserRouter>
    </Provider>
  );
};
export default Routes;
