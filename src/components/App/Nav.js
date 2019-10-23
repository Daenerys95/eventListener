import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

/* imports locaux */
import '../Modal/modal.scss';
import QuickSearchBar from 'src/redux/containers/Home/QuickSearchBar';
import LoginForm from '../Modal/LoginForm';
import RegisterForm from '../Modal/RegisterForm';


const Nav = ({
  menuBurger,
  openNavModal,
  menuIcon,
  activeNavMenu,
  showLogin,
  showRegister,
}) => {
  const handleNavModals = (event) => {
    openNavModal(event.target.name);
  };

  const menuBurgerClass = menuBurger ? 'menu-visible' : 'menu';

  return (
    <nav className="navigation-item">
      <div className="navigation-item--left">
        <NavLink
          to="/"
          exact
        >
        eventListener
        </NavLink>
        <QuickSearchBar />
      </div>

      <img
        src={menuIcon}
        alt="Menu"
        className="menu-burger"
        onClick={activeNavMenu}
      />

      <div className={menuBurgerClass}>
        <div className="menu-main">
          <NavLink
            to="/profil"
            exact
            activeClassName="navigation-item--active"
            className="navigation-item--right"
          >
            Tous les événements
          </NavLink>

          <div
            activeClassName="navigation-item--active"
          >
            <RegisterForm
              show={showRegister}
              handleclose={handleNavModals}
            />
            <button
              type="button"
              className="navigation-item--right button"
              name="register"
              onClick={handleNavModals}
            >
              Inscription
            </button>
          </div>

          <div
            activeClassName="navigation-item--active"
          >
            <LoginForm
              show={showLogin}
              handleclose={handleNavModals}
            />
            <button
              type="button"
              className="navigation-item--right button"
              name="login"
              onClick={handleNavModals}
            >
              Connexion
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

Nav.propTypes = {
  menuBurger: PropTypes.bool.isRequired,
  menuIcon: PropTypes.string.isRequired,
  showLogin: PropTypes.bool.isRequired,
  showRegister: PropTypes.bool.isRequired,
  openNavModal: PropTypes.func.isRequired,
  activeNavMenu: PropTypes.func.isRequired,
};

// == Export
export default Nav;
