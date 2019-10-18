// == Import : npm
import React from 'react';

// == Import : local
import './events.scss';

// == Composant
const Form = () => (
    <div className="search">
        <form>
            <div className="searchBar">
                <p>Recherche simple</p>
                <input type="search" className="searchBar-input" placeholder="Que recherchez-vous ?" />
                <button type="submit" className="searchBar-button">Rechercher</button>
            </div>
            <div className="searchBarAdvanced">
                <p>Recherche avancée</p>
                <input type="search" className="searchBar-input" placeholder="Tapez un mot-clef" />
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
                    <input type="radio" className="searchBarAdvanced-broadcast" name="diffusion" value="oui" />
                    <label for="oui">Oui</label>
                    <input type="radio" className="searchBarAdvanced-broadcast" name="diffusion" value="non" />
                    <label for="non">Non</label>
                </label>
                <label id="searchBarAdvanced-label_date">Date de début
                    <input type="date" name="date" min="2019-10-01" max="2020-02-29" />
                </label>
                <label id="searchBarAdvanced-label_adress">Ville
                    <input list="villes" id="searchBarAdvanced-label_adress-cities" name="ville" />
                    <datalist id="villes">
                        <option value="Ville 1" />
                        <option value="Ville 2" />
                        <option value="Ville 3" />
                    </datalist>
                </label>
                <button type="submit" className="searchBar-button">Rechercher</button>
            </div>
            
        </form>
    </div>
);

// == Export
export default Form;