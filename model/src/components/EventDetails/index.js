// import npm
import React from 'react';

// import sous-composants
import Nav from './Nav';
import Header from './Header';
import Description from './Description';

// import local
import './eventdetails.scss';

// Composant EventDetails
const EventDetails = () => (
  <div>
    <Nav />
    <div className="full-page">
      <Header />
      <Description />
    </div>
  </div>
  
);

export default EventDetails;
