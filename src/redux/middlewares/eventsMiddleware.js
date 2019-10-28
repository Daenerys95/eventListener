import axios from 'axios';
import { GET_EVENT_DETAILS } from '../actions/types';
import { fetchEventDetails } from '../actions/creators';

const eventsMiddleware = (store) => (next) => (action) => {
  console.log('Je suis le middleware, et je laisse passer cette action: ', action);

  switch (action.type) {
    case GET_EVENT_DETAILS: {
      //const state = store.getState();
      axios.get('http://localhost:3000/events/3')
        .then((response) => {
          console.log('from middleware : ', response.data.result.data.id);
          store.dispatch(fetchEventDetails(response.data.result.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    default:
      next(action);
  }
};

export default eventsMiddleware;
