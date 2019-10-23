// Import : npm
import React from 'react';


// Import : local
import './user.scss';


// == Composant UserEvents
const UserEvents = () => (
  <section className="preferences-events">
    <h2 className="preferences-events-title">
      Mes événements
    </h2>
    <div className="preferences-events-content">
      <h3 className="preferences-events-content-subtitle">
        Participations
      </h3>

      <h3 className="preferences-events-content-subtitle">
        Suivis
      </h3>
    </div>
  </section>
);


// == Export
export default UserEvents;
