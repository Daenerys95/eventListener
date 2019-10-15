import React from 'react';

const RegisterForm = ({ handleClose, show }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        <h1 className="">Inscription</h1>
        <form className="modal-form">
          <input className="" required placeholder="Pseudo *" type="" />
          <input className="" required placeholder="Adresse email *" type="email" />
          <input className="" required placeholder="Mot de passe *" type="password" />
          <input className="" required placeholder="Confirmer mot de passe *" type="password" />
          <p>Recevoir des newsletters provenant d'Event Listener</p>
          <button className="" type="submit">S'inscrire</button>
        </form>
        <button onClick={handleClose}>
            Annuler
        </button>
      </section>
    </div>
  );
};

export default RegisterForm;