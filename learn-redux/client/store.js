import { creteStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// Create object for the default data
const defaultState = {
  posts,
  comments
};

// create store with redux
const store = createStore(rootReducer, defaultState);

// use browserHistory with react router and redux
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
