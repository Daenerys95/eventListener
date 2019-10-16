import React from 'react';

import Datetime from './Datetime';
import Address from './Address';

const Description = () => (
  <div className="description">
    <div className="description-content">
      <h1>Description</h1>
      <p>✨ DataJob, le salon de référence pour trouver le job de vos rêves ✨</p>
      <p>Retrouvez-nous le mardi 12 novembre 2019 à la Cité des Sciences et de l'Industrie de 9h à 19h.</p>
      <p>OUVERTURE DES PORTES à 8h30</p>
      <p>En 2018, DataJob a réunit plus de 3 000 participants, 80 entreprises et plus de 30 conférences/workshops.</p>
      <p>En 2019, DataJob c'est :</p>
      <ul>
        <li>90 entreprises à la recherche de leurs nouveaux talents tels que Quantmetry, Criteo, Louis Vuitton, le Groupe Crédit Agricole, la Caisse des Dépôts et <a href="https://www.datajob.fr/exposants-2019">bien d'autres</a>... </li>
        <li>30 conférences avec des speakers de Facebook (Angela FAN), INRIA (Alexandre GRAMFORT), Ubisoft (Thomas SAIAG) . Programme à découvrir dès octobre !</li>
        <li>2 meetups le soir : Paris Data Ladies et AI Engineering</li>
      </ul>
      <p>Plus d'info: <a href="https://www.datajob.fr/">www.datajob.fr</a> </p>
    </div>
    <div className="description-time">
      <Datetime /> 
      <Address />
    </div>
  </div>
);

export default Description;
