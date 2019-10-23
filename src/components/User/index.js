// == Import : npm
import React from 'react';


// == Import : local
import './user.scss';
import Header from 'src/redux/containers/User/Header';
import Preferences from 'src/redux/containers/User/Preferences';
import UserEvents from 'src/components/User/UserEvents';


// == Composant User
const User = () => (
  <>
    <Header />
    <section className="user">
      <Preferences />
      <UserEvents />
    </section>
  </>
);


// == Export
export default User;
