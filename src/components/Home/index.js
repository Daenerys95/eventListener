import React from 'react';
import PropTypes from 'prop-types';

import Event from 'src/redux/containers/Events/Event';
import SearchForm from './SearchForm';
import Contact from './Contact';
import './home.scss';

// == Composant
class Home extends React.Component {
  state = {}

  componentDidMount() {
    const { showNextEvents } = this.props;
    showNextEvents();
  }

  render() {
    const { data } = this.props;
    console.log(data);
    return (
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

          {data.map((event) => <Event key={event.id} {...event} view="list" />)}

          <Contact />
        </main>
      </>
    );
  }
}

Home.propTypes = {
  showNextEvents: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
};

// == Export
export default Home;
