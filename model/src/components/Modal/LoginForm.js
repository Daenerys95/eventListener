import React from 'react';

const LoginForm = ({ handleClose, show }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
    return (
      <div className={showHideClassName}>
        <section className='modal-main'>
          <h1 className="modal-h1">Connexion</h1>
          <form className="modal-form">
            <input className="modal-input" required placeholder="Adresse email *" type="email" autoComplete="new-password" />
            <input className="modal-input" required placeholder="Mot de passe *" type="password" autoComplete="new-password" />
          </form>
          <input type="checkbox"></input>
          <p>Rester connecté</p>
          <button className="" type="submit">Se connecter</button>
          <label className="app-link">Mot de passe oublié ?</label>
          <button onClick={handleClose}>
            Annuler
          </button>
        </section>
      </div>
    );
};

export default LoginForm;