// == Import : npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './events.scss';
import HeaderGradient from 'src/components/App/HeaderGradient';
import Form from 'src/redux/containers/Events/Form';
import Event from 'src/redux/containers/Events/Event';


// == Composant Events
class Events extends React.Component {
  state = {}

  componentDidMount() {
    const { value, showEvents } = this.props;
    if (value.trim().length === 0) {
      showEvents();
    }
  }

  render() {
    const {
      data,
    } = this.props;

    return (
      <>
        <HeaderGradient />
        <section className="events">
          <h2 className="events-title">
            Tous les événements
          </h2>
          <Form />
          <h4 className="events-subtitle">Résultats de recherche</h4>
          {data.map((event) => <Event key={event.id} {...event} view="list" />)}
        </section>
      </>
    );
  }
}


Events.propTypes = {
  data: PropTypes.array.isRequired,
  value: PropTypes.string,
  showEvents: PropTypes.func.isRequired,
};
Events.defaultProps = {
  value: '',
};


// == Export
export default Events;
