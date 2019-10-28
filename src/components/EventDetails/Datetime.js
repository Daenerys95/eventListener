import React from 'react';
import Proptypes from 'prop-types';
import moment from 'moment';

import iconDate from 'src/assets/images/icons/icons8-calendar-50.png';

class Datetime extends React.Component {
  state = {}

  render() {
    const { dateStart } = this.props;
    // https://momentjs.com/docs/#/displaying/format/
    const date = moment(dateStart).format('dddd d MMMM YYYY ');
    const time = moment(dateStart).format('h:mm');
    const now = moment().format();

    const eventState = () => {
      if (moment(now).isSame(moment(dateStart).format())) {
        console.log('evenement en cours');
      } else {
        console.log('à venir ou passé');
      }
    };

    return (
      <div className="datetime">
        <h3 className="subtitle">
          <img className="icon" src={iconDate} alt="icon-date" />
          Date et heure
        </h3>
        <p>
          <time>{date}</time>
          <time>Ouverture à {time}</time>
          <a href="#" onClick={eventState}>Ajouter au calendrier</a>
        </p>
      </div>
    );
  }
}

Datetime.propTypes = {
  dateStart: Proptypes.string.isRequired,
};

export default Datetime;
