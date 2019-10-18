// import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// import local
import './user.scss';
import DeleteAccount from 'src/components/User/DeleteAccount';

// composant
const Preferences = ({
  firstname,
  lastname,
  email,
  notifNewEvent,
  notifNewUpdate,
}) => {
  // Hook for display/hidden the modal
  const [modalStatus, changeModalStatus] = useState(false);
  // Hook for display/hidden editor mode
  const [editorModeDisabled, changEditorModeDisabled] = useState(true);

  // if checked or not, the message change
  let nameForNotifNewEvent = 'Ne pas recevoir d\'email pour chaque nouvel événement';
  if (notifNewEvent) {
    nameForNotifNewEvent = 'Recevoir un email pour chaque nouvel événement';
  }

  // if checked or not, the message change
  let nameFornotifNewUpdate = 'Ne pas recevoir d\'email à la modification d\'un événement';
  if (notifNewUpdate) {
    nameFornotifNewUpdate = 'Recevoir un email à la modification d\'un événement';
  }

  const handleChangeModalStatus = () => {
    changeModalStatus(!modalStatus);
  };

  const handleChangEditorModeDisabled = () => {
    changEditorModeDisabled(!editorModeDisabled);
  };

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
            { !editorModeDisabled && (
              <>
                <label
                  className="content-input-label-field"
                  htmlFor="passwordInput"
                >
                  Mot de passe :
                </label>
                <input
                  className="content-input-field"
                  id="passwordInput"
                  name="password"
                  type="password"
                  value=""
                />
                <label
                  className="content-input-label-field"
                  htmlFor="confirmePasswordInput"
                >
                  Confirmer :
                </label>
                <input
                  className="content-input-field"
                  id="confirmePasswordInput"
                  name="confirmePassword"
                  type="password"
                  value=""
                />
              </>
            ) }
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
            <button
              className="button button--mode-editor"
              type="button"
              onClick={handleChangEditorModeDisabled}
            >
              Modifier mes informations
            </button>
          ) }
          { !editorModeDisabled && (
            <button
              className="button button--validate-preferences"
              type="submit"
              onClick={handleChangEditorModeDisabled}
            >
              Valider mes modifications
            </button>
          ) }
          <button
            className="button button--delete-account"
            type="button"
            onClick={handleChangeModalStatus}
          >
            Supprimer mon compte
          </button>
        </div>

      </form>
      { modalStatus && (
        <DeleteAccount changeModalStatus={handleChangeModalStatus} />
      ) }
    </div>
  );
};

Preferences.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  notifNewEvent: PropTypes.bool.isRequired,
  notifNewUpdate: PropTypes.bool.isRequired,
};

// export
export default Preferences;
