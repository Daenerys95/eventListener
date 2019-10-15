// import npm
import React from 'react';
import PropTypes from 'prop-types';

// import local
import './user.scss';

// composant
const User = ({ pseudo, urlAvatar }) => (
  <header className="header">
    <p className="header-pseudo">
      {pseudo}
    </p>
    <img className="header-avatar" src={urlAvatar} alt="avatar" />
  </header>
);

User.propTypes = {
  pseudo: PropTypes.string.isRequired,
  urlAvatar: PropTypes.string.isRequired, // Ajouter, par la suite, un avatar par défaut
};

// export
export default User;
