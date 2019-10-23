import { combineReducers } from 'redux';

// import des reducers
import { eventIcons } from './eventdetails';
import { user } from './user';
import { app } from './app';

export default combineReducers({
  eventIcons,
  user,
  app,
  // ...
});
