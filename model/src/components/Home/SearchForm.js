// == Import : npm
import React from 'react';

// == Import : local
import './home.scss';

// == Composant
const SearchForm = () => (
    <div className="searchBar">
        <input type="search" className="searchBar-input" placeholder="rechercher un évènement" />
        <button className="searchBar-button">Rechercher</button>
    </div>
);

// == Export
export default SearchForm;