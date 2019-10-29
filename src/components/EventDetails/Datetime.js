import React from 'react';
import Proptypes from 'prop-types';
import moment from 'moment';

import iconDate from 'src/assets/images/icons/icons8-calendar-50.png';

class Datetime extends React.Component {
  state = {}

  render() {
    const { dateStart } = this.props;
    // https://momentjs.com/docs/#/displaying/format/
    const date = moment(dateStart).format('ddd DD MMM YYYY'); 

    return (
      <div className="datetime">
        <h3 className="subtitle">
          <img className="icon" src={iconDate} alt="icon-date" />
          Date
        </h3>
        <p>
          <time>{date}</time>
          <a href="#">Ajouter au calendrier</a>
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
