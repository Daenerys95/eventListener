// import npm
import React from 'react';

// import local
import './user.scss';
import Header from 'src/components/User/Header';
import Preferences from 'src/components/User/Preferences';

const state = {
  pseudo: 'Teriyaki',
  urlAvatar: 'https://pixabay.com/get/5fe7d6474c52b10ff3d89938b977692b083edbe25253734073277d/blank-profile-picture-973460_640.png',
  firstname: 'Guillaume',
  lastname: 'Terrien',
  email: 'guillaume.terrien.gt@gmail.com',
  notifNewEvent: false,
  notifNewUpdate: true,
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
