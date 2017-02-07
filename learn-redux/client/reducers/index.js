import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Import reducers
import posts from './posts';
import comments from './comments';

// Combine reducers
const rootReducer = combineReducers({posts, comments, router: routerReducer});

export default rootReducer;
