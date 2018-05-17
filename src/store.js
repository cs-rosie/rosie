import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './Reducers/index';

const store = createStore(
  reducer,
  composeWithDevTools()
);

export default store;
