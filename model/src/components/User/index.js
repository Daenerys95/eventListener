// import npm
import React from 'react';

// import local
import './user.scss';
import Header from 'src/components/User/Header';
import Preferences from 'src/components/User/Preferences';

const state = {
  pseudo: 'Teriyaki',
  urlAvatar: null,
  firstname: 'Guillaume',
  lastname: 'Terrien',
  email: 'guillaume.terrien.gt@gmail.com',
  notifNewEvent: false,
  notifNewUpdate: true,
  editorModeDisabled: false,
};

// composant
const User = () => (
  <div className="user">
    <Header
      pseudo={state.pseudo}
    />
    <Preferences
      firstname={state.firstname}
      lastname={state.lastname}
      email={state.email}
      notifNewEvent={state.notifNewEvent}
      notifNewUpdate={state.notifNewUpdate}
      editorModeDisabled={state.editorModeDisabled}
    />
  </div>
);

// export
export default User;
