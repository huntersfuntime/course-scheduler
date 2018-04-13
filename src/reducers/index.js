import { combineReducers } from 'redux';
import coursesReducer from './courses';

const rootReducer = combineReducers({
  courses: coursesReducer
});

export default rootReducer;