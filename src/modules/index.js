import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';
// import actions from '/modules/actions';

export default combineReducers({
  router: routerReducer,
  counter
});
