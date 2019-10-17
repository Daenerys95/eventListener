// == Import : npm
import React from 'react';

// == Import : local
import './events.scss';
import Form from './Form';
import Event from './Event';

// == Composant
const Events = () => (
    <div>
        <Form />
        <Event />
    </div>
);

// == Export
export default Events;