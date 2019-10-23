// == Import : npm
import React from 'react';


// Import : local
import './eventdetails.scss';
import Header from 'src/redux/containers/EventDetails/Header';
import Datetime from './Datetime';
import Address from './Address';
import Description from './Description';
import Tags from './Tags';
import CheckButtons from './CheckButtons';


// == Composant EventDetails
const EventDetails = () => (
  <>
    <div className="event">

      <section className="event-flyer">
        <Header />

        <article className="event-flyer-description">

          <aside className="event-flyer-infos">
            <Datetime />
            <Address />
          </aside>

          <Description />
        </article>

        <Tags />
        <CheckButtons />
      </section>

    </div>
  </>
);


// == Export
export default EventDetails;
