import React from 'react';

const Nav = () => (
  <div className="nav">
    <div className="nav-left">
      <p className="nav-logo">eventListener</p>
      <form className="nav-form" method="POST">
        {/* <img className="nav-icon" src="https://img.icons8.com/ios/50/000000/search--v1.png" /> */}
        <img src="https://img.icons8.com/android/12/000000/search.png"></img>
        <input className="nav-form-input" type="text" placeholder="Rechercher des événements" />
      </form> 
    </div>
    <div className="nav-right">
      <button className="nav-btn" type="button">Se Connecter</button>
      <button className="nav-btn" type="button">S'inscrire</button>
    </div>
   
  </div>
);

export default Nav;
