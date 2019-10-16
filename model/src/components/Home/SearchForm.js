// == Import : npm
import React from 'react';

// == Import : local
import './home.scss';

// == Composant
const SearchForm = () => (
    <form>
        <div className="searchBar">
            <input type="search" className="searchBar-input" placeholder="Que recherchez-vous ?" />
        </div>
        <div className="searchBarAdvanced">
            <label id="searchBarAdvanced-label_tag">Tag
                <select name="tag">
                    <option value="">Tag 1</option>
                    <option value="">Tag 2</option>
                    <option value="">Tag 3</option>
                </select>
            </label>
            <label id="searchBarAdvanced-label_price">Prix
                <input type="radio" className="searchBarAdvanced-price" name="prix" value="gratuit" />
                <label for="gratuit">Gratuit</label>
                <input type="radio" className="searchBarAdvanced-price" name="prix" value="payant" />
                <label for="payant">Payant</label>
            </label>
            <label id="searchBarAdvanced-label_broadcast">Diffusion internet
                <input type="radio" className="searchBarAdvanced-broadcast" name="Diffusion" value="oui" />
                <label for="oui">Oui</label>
                <input type="radio" className="searchBarAdvanced-broadcast" name="Diffusion" value="non" />
                <label for="non">Non</label>
            </label>
            <label id="searchBarAdvanced-label_date">Date
                <input type="date" name="date" min="2019-10-01" max="2020-02-29" />
            </label>
        </div>
        <button type="submit" className="searchBar-button">Rechercher</button>
    </form>
);

// == Export
export default SearchForm;