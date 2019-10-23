// == Import : npm
import React from 'react';


// == Import : local
import errorPage from 'src/assets/images/404.png';


// Composant Errors
const Errors = () => (
  <>
    <img src={errorPage} alt="404" />
    <button type="button">Page d'accueil</button>
  </>
);


// Export
export default Errors;
