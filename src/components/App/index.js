// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// == Import : local
import './app.scss';
import Events from 'src/components/Events';



// == Composant
const App = () => (
  <div id="app">
    <Events />
  </div>
);

// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');

// Le rendu de React => DOM
render(<Events />, target);

// == Export
export default App;
