// == Import : npm
import React from 'react';

// == Import : local
import './events.scss';
import image from '../../assets/images/test_evt.png';
import icon_share from '../../assets/icons/share.png';


// == Composant
const Event = () => (
    <div className="evt">
        <img src={image} alt="Image 1" />
        <div className="evt-infos">
            <span>Gratuit</span>
            <h3>Présentations projets Titan</h3>
            <ul>
                <li>17 octobre 2019</li>
                <li>Twitch</li>
                <li>Gratuit</li>
            </ul>
        </div>
        <div className="evt-button">
            <button className="evt-button-share"><img src={icon_share} alt="Partage social" /></button>
            <button className="">Aimer</button>
        </div>
    </div>
);

// == Export
export default Event;