// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';
import moment from 'moment';


// == Import : local
import iconPlus from 'src/assets/images/icons/icons8-plus-50.png';


// == Composant Event
const Event = ({
  id,
  view,
  title,
  url_image: urlImage,
  address,
  date_start: dateStart,
}) => {
  const eventDate = moment(dateStart).format('DD MMM YYYY');
  
  const pureAddress = <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(address) }} />;

  return (
    <div className={`menu-item ${view}`}>
      <div
        className="menu-item-top"
        style={{
          backgroundImage: `url(${urlImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {urlImage}
      </div>
      <div className="menu-item-middle">
        <h4 className="menu-item-middle-title">{title}</h4>
        <Link to={`/evenements/${id}`}>
          <img
            src={iconPlus}
            alt="plus"
            className="icon"
          />
        </Link>
        <p className="menu-item-middle-date">{eventDate}</p>
      </div>
      <div className="menu-item-bot">
        <p className="menu-item-bot-location">{pureAddress}</p>
      </div>
    </div>
  );
};


Event.propTypes = {
  id: PropTypes.number.isRequired,
  view: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url_image: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  date_start: PropTypes.string.isRequired,
};
// == Export
export default Event;
