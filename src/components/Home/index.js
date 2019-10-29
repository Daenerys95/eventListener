import React from 'react';
import SearchForm from './SearchForm';
import Contact from './Contact';

import './home.scss';

// == Composant
const Home = () => (
  <>
    <header>
      <canvas className="header_background" />
      <div className="header-content">
        <p className="header-content-text">
          Accroche à définir qui sera trop mega cool (ou pas)
        </p>
        <SearchForm />
      </div>
    </header>

    <main>
      <h2 className="events-title">
        Prochains événements
      </h2>

      {/*data.map((event) => <Event key={event.id} {...event} view="card" />)*/}

      <Contact />
    </main>
  </>
);

// == Export
export default Home;
