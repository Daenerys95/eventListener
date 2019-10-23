// == Import : npm
import React from 'react';


// == Import : local
import './home.scss';
import SearchForm from './SearchForm';
import Contact from './Contact';
import Events from '../Events';


// == Composant Home
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
      <Events />
      <Contact />
    </main>
  </>
);


// == Export
export default Home;
