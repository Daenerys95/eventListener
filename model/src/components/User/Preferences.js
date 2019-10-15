// import npm
import React from 'react';
import PropTypes from 'prop-types';

// import local
import './user.scss';

// composant
const Preferences = ({
  firstname,
  lastname,
  email,
  notifNewEvent,
  notifNewUpdate,
  editorModeDisabled,
}) => {
  let nameForNotifNewEvent = 'Ne pas recevoir d\'email pour chaque nouvel événement';
  if (notifNewEvent) {
    nameForNotifNewEvent = 'Recevoir un email pour chaque nouvel événement';
  }

  let nameFornotifNewUpdate = 'Ne pas recevoir d\'email à la modification d\'un événement';
  if (notifNewUpdate) {
    nameFornotifNewUpdate = 'Recevoir un email à la modification d\'un événement';
  }

  return (
    <div className="preferences">
      <h2 className="preferences-title">
        Mes informations
      </h2>
      <div className="preferences-infos">
        <div className="preferences-infos-input">
          <label
            className="preferences-infos-input-label-field"
            htmlFor="firstnameInput"
          >
            Nom :
          </label>
          <input
            className="preferences-infos-input-field"
            id="firstnameInput"
            name="firstname"
            type="text"
            value={lastname}
            disabled={editorModeDisabled}
          />
          <label
            className="preferences-infos-input-label-field"
            htmlFor="lastnameInput"
          >
            Prenom :
          </label>
          <input
            className="preferences-infos-input-field"
            id="lastnameInput"
            name="lastname"
            type="text"
            value={firstname}
            disabled={editorModeDisabled}
          />
          <label
            className="preferences-infos-input-label-field"
            htmlFor="emailInput"
          >
            Adresse mail :
          </label>
          <input
            className="preferences-infos-input-field"
            id="emailInput"
            name="email"
            type="email"
            value={email}
            disabled={editorModeDisabled}
          />
          <div className="preferences-infos-input-checkbox">
            <input
              className="checkbox"
              id="notifNewEvent"
              name="notifNewEvent"
              type="checkbox"
              disabled={editorModeDisabled}
              checked={notifNewEvent}
            />
            <label
              className="label"
              htmlFor="notifNewEvent"
            >
              {nameForNotifNewEvent}
            </label>
          </div>
          <div className="preferences-infos-input-checkbox">
            <input
              className="checkbox"
              id="notifNewUpdate"
              name="notifNewUpdate"
              type="checkbox"
              disabled={editorModeDisabled}
              checked={notifNewUpdate}
            />
            <label
              className="label"
              htmlFor="notifNewUpdate"
            >
              {nameFornotifNewUpdate}
            </label>
          </div>
        </div>
        <div className="preferences-infos-buttons">
          <button className="modeEditor" type="submit">Modifier mes informations</button>
          <a className="deleteAccount" href="#">Supprimer mon compte</a>
        </div>
      </div>
    </div>
  );
};

Preferences.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  notifNewEvent: PropTypes.bool.isRequired,
  notifNewUpdate: PropTypes.bool.isRequired,
  editorModeDisabled: PropTypes.bool.isRequired,
};

// export
export default Preferences;
