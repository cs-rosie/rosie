import { combineReducers } from 'redux';

// import all reducers here
import appointmentReducer from './appointmentReducer';

// combine reducers
// reducers is a FUNCTION
const reducers = combineReducers({
  // if we had other reducers, they would go here
  data: appointmentReducer
});

// make the combined reducers available for import
export default reducers;

