import { combineReducers } from 'redux';

// import des reducers
import { eventDetails } from './eventdetails';
import { user } from './user';
import { app } from './app';
import { home } from './home';
import { form } from './events';

export default combineReducers({
  user,
  app,
  home,
  form,
  eventDetails,
  // ...
});
