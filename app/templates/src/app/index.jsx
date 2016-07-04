/* eslint camelcase: 0 */
import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from 'stores/configure-store';
import routes from './routes';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

require('../scss/app.scss');

render(
  <Provider store={store}>
    <Router history={history}>
      {routes()}
    </Router>
  </Provider>,
  document.getElementById('main')
);
