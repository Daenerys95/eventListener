// == Import: npm
import axios from 'axios';

// Import Local
import { CHANGE_UPDATE_USER } from '../actions/types';
import { handleChangEditorModeDisabled } from '../actions/creators';

const eventUserUpdateMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CHANGE_UPDATE_USER: {
      const { user } = store.getState();
      axios.post(`http://localhost:3000/users/${user.id}/update`, {
        ...user,
      })
        .then((response) => {
          store.dispatch(handleChangEditorModeDisabled());
        })
        .catch((error) => console.log('from middleware:', error));
      break;
    }
    default:
      next(action);
  }
};

export default eventUserUpdateMiddleware;
