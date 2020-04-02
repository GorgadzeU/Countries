import React from 'react';

import './countries.styles.css'

import Card from '../../components/card/card.component';

const Countries = ({ data }) =>  {
    
        return (
            <div className='countries-container'>
                {data.map(cntry => (
                    <Card
                    key={cntry.name}
                    imgUrl={cntry.flag}
                    name={cntry.name}
                    population={cntry.population}
                    region={cntry.region}
                    capital={cntry.capital}
                    />
                ))}
            </div>
        )

}

//

export default Countries;


