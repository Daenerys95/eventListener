// == Import : npm
import React from 'react';

// == Import : local
// import Form from './Form';
// import Event from './Event';
import ScrollEvents from './ScrollEvents';
import './events.scss';

// == Composant
const Events = () => (
    <section className="events">
        <h1 className="events-title">
            Prochains événements
        </h1>
    {/* <NavLink
      to="/event"
    > */}
      <div className="eventsMenu">
        <a className="eventsMenu-allEvents">Tous les évenements</a>
      </div>
    {/* </NavLink> */}
    <div>
      <ScrollEvents />
    </div>
  </section>
);

// == Export
export default Events;