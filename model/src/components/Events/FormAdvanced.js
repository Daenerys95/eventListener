// == Import : npm
import React from 'react';

// == Import : local
import './events.scss';

// == Composant
class FormAdvanced extends React.Component {
    constructor(props) {
        super(props) 
        this.state = { search : '' };

        this.buttonClick = this.buttonClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        buttonClick = () => {
            event.preventDefault();
            console.log('bouton cliqué');
            this.setState({
                clicked : !this.state.clicked
            });
            console.log(this);
            // effectuer ici une recherche par mot-clef
        }
    
        handleChange(event) {
            this.setState({search: event.target.search});
        }
    
        handleSubmit(event) {
            console.log('test : ' + this.state.search);
        }
    }
    render() {
        let Form = this.props.Form;
        return (
            <div className="searchBarAdvanced">
                        <p>Recherche avancée</p>
                        <input type="search" className="searchBar-input" placeholder="Tapez un mot-clef" />
                        <label className="searchBarAdvanced-label_tag">Tag
                            <select name="tag" value={this.state.value}>
                                <option value="{this.state.value}">{name}</option>
                                <option value="{this.state.value}">{name}</option>
                                <option value="{this.state.value}">{name}</option>
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
                                <option value="{address.event}" />
                                <option value="{address.event}" />
                                <option value="{address.event}" />
                            </datalist>
                        </label>
                        <button type="submit" className="searchBar-button" onClick>Rechercher</button>
                    </div>
        );
    }
    
}

// == Export
export default FormAdvanced;