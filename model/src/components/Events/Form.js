// == Import : npm
import React from 'react';

// == Import : local
import './events.scss';

// == Composant
const Form = ({
    address
}) => (
    console.log(address),
    <div className="search">
        <form>
            <div className="searchBar">
                <p>Recherche simple</p>
                <input type="search" className="searchBar-input" placeholder="Que recherchez-vous ?" />
                <button type="submit" className="searchBar-button" onClick={ButtonClick}>Rechercher</button>
            </div>
            <div className="searchBarAdvanced">
                <p>Recherche avancée</p>
                <input type="search" className="searchBar-input" placeholder="Tapez un mot-clef" />
                <label className="searchBarAdvanced-label_tag">Tag
                    <select name="tag" value={this.state.value}>
                        <option value="{name.tag}">{name}</option>
                        <option value="{name.tag}">{name}</option>
                        <option value="{name.tag}">{name}</option>
                    </select>
                </label>
                <label clasName="searchBarAdvanced-label_price">Prix
                    <input type="radio" className="searchBarAdvanced-price" name="prix" value="gratuit" />
                    <label for="gratuit">Gratuit</label>
                    <input type="radio" className="searchBarAdvanced-price" name="prix" value="payant" />
                    <label for="payant">Payant</label>
                </label>
                <fieldset className="searchBarAdvanced-label_broadcast">Diffusion internet
                    <input type="radio" className="searchBarAdvanced-broadcast" name="diffusion" value="oui" />
                    <label for="oui">Oui</label>
                    <input type="radio" className="searchBarAdvanced-broadcast" name="diffusion" value="non" />
                    <label for="non">Non</label>
                </fieldset>
                <label className="searchBarAdvanced-label_date">Date de début
                    <input type="date" name="date" min="2019-10-01" max="2020-02-29" />
                </label>
                <label className="searchBarAdvanced-label_adress">Ville
                    <input list="villes" id="searchBarAdvanced-label_adress-cities" name="ville" />
                    <datalist id="villes">
                        <option value={address} />
                        <option value={address} />
                        <option value={address} />
                    </datalist>
                </label>
                <button type="submit" className="searchBar-button" onClick={ButtonClickAdvanced}>Rechercher</button>
            </div>
            
        </form>
    </div>
);

function ButtonClick(e) {
    e.preventDefault();
    console.log('bouton cliqué');
    // effectuer ici une recherche par mot-clef
}

function ButtonClickAdvanced(e) {
    e.preventDefault();
    console.log('bouton cliqué');
    // effectuer ici la recherche avancée
}

function handleChange(event) {
    this.setState({value: event.target.value});
}

function handleSubmit(event) {
    console.log('this.state.value');
    event.preventDefault();
}

// https://fr.reactjs.org/docs/forms.html
// https://www.apprendre-react.fr/tutorial/debutant/les-composants/

// == Export
export default Form;