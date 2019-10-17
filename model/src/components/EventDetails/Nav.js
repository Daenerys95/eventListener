import React from 'react';

const Nav = () => (
  <nav className="nav">
    <div className="nav-left">
      <p className="nav-logo">eventListener</p>
      <form className="nav-form" method="POST">
        <img src="https://img.icons8.com/android/12/000000/search.png"></img>
        <input className="nav-form-input" type="text" placeholder="Rechercher des événements" />
      </form> 
    </div>
    <div className="nav-right">
      <button className="nav-btn" type="button">Inscription</button>
      <button className="nav-btn" type="button">Connexion</button>
    </div>
  </nav>
);

export default Nav;
