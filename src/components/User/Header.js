// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';


// == Import : local
import './user.scss';
import avatarImg from 'src/assets/images/defaultAvatar.png';


// == Composant Header
const Header = ({ pseudo, urlAvatar }) => (
  <header className="header">
    <canvas className="header_background" />
    <p className="header-pseudo">
      {pseudo}
    </p>
    <img className="header-avatar" src={urlAvatar} alt="avatar" />
  </header>
);


// == PropTypes
Header.propTypes = {
  pseudo: PropTypes.string.isRequired,
  urlAvatar: PropTypes.string,
};
Header.defaultProps = {
  urlAvatar: avatarImg,
};


// == Export
export default Header;
