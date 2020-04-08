import { combineReducers } from 'redux';
import logReducer from './logReducer';

export default combineReducers({
  log: logReducer, // Over here is what we call our state. In this case, we're calling it log
});
