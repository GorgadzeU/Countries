import React from 'react';

import './card.styles.css';

const Card = (props) => (
    <div className='card'>
    <img src="https://restcountries.eu/data/usa.svg" alt="" className='image'/>
    <div className='info-container'>
    <span className='name'>Name:Georgia</span>
    <span>Population: 3000000</span>
    <span>Region: Europe</span>
    <span>Capital: Tbilisi</span>
    </div>
    </div>
)

export default Card;