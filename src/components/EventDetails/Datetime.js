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
    //const now = moment().format();
    // let eventStateText = 'Terminé';
    // if (moment(now).isSame(moment(dateStart).format())) {
    //   console.log('evenement en cours');
    //   eventStateText = 'En cours';
    // }
    // if (moment(now).isBefore(moment(dateStart).format())) {
    //   eventStateText = 'A venir';
    // }
    

    return (
      <div className="datetime">
        <h3 className="subtitle">
          <img className="icon" src={iconDate} alt="icon-date" />
          Date
        </h3>
        <p>
          <time>{date}</time>
          <a href="#">Ajouter au calendrier</a>
          <span className="event-state">Evenement à venir</span>
        </p>
      </div>
    );
  }
}

Datetime.propTypes = {
  dateStart: Proptypes.string,
};
Datetime.defaultProps = {
  dateStart: '',
};

export default Datetime;
