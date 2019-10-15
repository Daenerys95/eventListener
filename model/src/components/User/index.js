// == Import : npm
import React from 'react';

// == Import : local
import './user.scss';
import Header from 'src/components/User/Header';

const state = {
  pseudo: 'Teriyaki',
  urlAvatar: 'https://image-placeholder.com/images/actual-size/200x200.png',
};

// == Composant
const User = () => (
  <div className="user">
    <Header pseudo={state.pseudo} urlAvatar={state.urlAvatar} />
  </div>
);

// == Export
export default User;
