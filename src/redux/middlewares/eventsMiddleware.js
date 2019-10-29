// == Import: npm
import axios from 'axios';

// == Import :  Action Types
import {
  TRIGGER_MIDDLEWARE,
  ALL_EVENTS,
} from '../actions/types';


// == Import :  Action Creators
import {
  fetchNameRequestData,
} from '../actions/creators';

// == Middleware : eventsMiddleware
const eventsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case TRIGGER_MIDDLEWARE: {
      const { value } = store.getState().form;
      axios.get(`http://localhost:3000/events/title/${value}`)
        .then((response) => {
          const { data } = response.data.result;
          store.dispatch(fetchNameRequestData(data));
        })
        .catch((error) => {
          console.log('from middleware:', error);
        });
      break;
    }
    case ALL_EVENTS: {
      axios.get('http://localhost:3000/events')
        .then((response) => {
          const { data } = response.data;
          store.dispatch(fetchNameRequestData(data));
        })
        .catch((error) => console.log('from middelware:', error));
      break;
    }
    default:
      next(action);
  }
};


// == Export
export default eventsMiddleware;
