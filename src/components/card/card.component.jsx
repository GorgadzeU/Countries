import React from 'react';

import './card.styles.css';

const Card = ({ name, population, region, capital, imgUrl }) => (
    <div className='card'>
    <img src={imgUrl} alt="" className='image'/>
    <div className='info-container'>
    <span className='name'>Name: {name}</span>
    <span>Population: {population}</span>
    <span>Region: {region}</span>
    <span>Capital: {capital}</span>
    </div>
    </div>
)

export default Card;