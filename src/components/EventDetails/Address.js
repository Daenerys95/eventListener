import React from 'react';

import iconAdress from 'src/assets/images/icons/icons8-marqueur-50.png';

const Address = () => (
  <div className="address">
    <h3 className="subtitle">
      <img className="icon" src={iconAdress} alt="icon-adress" />
      Adresse
    </h3>
    <address>
      Cité des sciences et de l'industrie <br />
      30 Avenue Corentin Cariou
      75019 Paris <br />
    </address>
    <p>
      <a href="#">Afficher la carte</a>
    </p>
  </div>
);
export default Address;
