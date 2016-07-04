import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from 'reducers/index';

const router = routerMiddleware(browserHistory)

const logger = createLogger({
  predicate: () => process.env.NODE_ENV == 'development',
  logger: console
});

const createStoreWithMiddleware = applyMiddleware(thunk, logger, router)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
