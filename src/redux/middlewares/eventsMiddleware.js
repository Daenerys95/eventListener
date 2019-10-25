import axios from 'axios';
import { FETCH_EVENT_DETAILS } from '../actions/types';
import { fetchEventDetails, getEventDetails } from '../actions/creators';

const eventsMiddleware = (store) => (next) => (action) => {
  console.log('Je suis le middleware, et je laisse passer cette action: ', action);

  switch (action.type) {
    case FETCH_EVENT_DETAILS:
      axios.get('http://localhost:3000/events/1')
        .then((response) => {
          console.log('Je suis le middleware, et je laisse passer cette data: ', response.data);
          store.dispatch(fetchEventDetails(response.data));
          // next(action);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {

        });
      break;
    default:
      next(action);
  }
};

export default eventsMiddleware;
