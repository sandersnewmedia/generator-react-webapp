import { combineReducers } from 'redux';
import auth from './auth';
import {routerReducer} from 'react-router-redux';

export default combineReducers({
  auth,
  routing: routerReducer
});
