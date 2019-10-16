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
      <form className="preferences-infos">

        <div className="preferences-infos-container">

          <div className="content content--left">

            <label
              className="content-input-label-field"
              htmlFor="firstnameInput"
            >
              Nom :
            </label>
            <input
              className="content-input-field"
              id="firstnameInput"
              name="firstname"
              type="text"
              value={lastname}
              disabled={editorModeDisabled}
            />

            <label
              className="content-input-label-field"
              htmlFor="lastnameInput"
            >
              Prenom :
            </label>
            <input
              className="content-input-field"
              id="lastnameInput"
              name="lastname"
              type="text"
              value={firstname}
              disabled={editorModeDisabled}
            />

            <label
              className="content-input-label-field"
              htmlFor="emailInput"
            >
              Adresse mail :
            </label>
            <input
              className="content-input-field"
              id="emailInput"
              name="email"
              type="email"
              value={email}
              disabled={editorModeDisabled}
            />

          </div>

          <div className="content content--right">

            <div className="content-input-checkbox">
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

            <div className="content-input-checkbox">
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

        </div>

        <div className="preferences-infos-buttons">
          { editorModeDisabled && (
            <button className="button button--mode-editor" type="button">Modifier mes informations</button>
          ) }
          { !editorModeDisabled && (
            <button className="button button--validate-preferences" type="submit">Valider mes modifications</button>
          ) }
          <button className="button button--delete-account" type="button">Supprimer mon compte</button>
        </div>

      </form>
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
