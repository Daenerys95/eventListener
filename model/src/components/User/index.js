// import npm
import React from 'react';

// import local
import './user.scss';
import Header from 'src/components/User/Header';
import Preferences from 'src/components/User/Preferences';

const state = {
  pseudo: 'Teriyaki',
  urlAvatar: 'https://image-placeholder.com/images/actual-size/200x200.png',
  firstname: 'Guillaume',
  lastname: 'Terrien',
  email: 'guillaume.terrien.gt@gmail.com',
  notifNewEvent: true,
  notifNewUpdate: false,
  editorModeDisabled: true,
};

// composant
const User = () => (
  <div className="user">
    <Header
      pseudo={state.pseudo}
      urlAvatar={state.urlAvatar}
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
