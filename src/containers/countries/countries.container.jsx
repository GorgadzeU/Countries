import React, { Component } from 'react';

import './countries.styles.css'

import Card from '../../components/card/card.component';

class Countries extends Component {
    render() {
        return (
            <Card />
        )
    }
}

// axios.get('https://restcountries.eu/rest/v2/all')
// .then(res => {
//   for (let cntry in res.data) {
//     console.log(res.data[cntry].name,
//       res.data[cntry].population,
//       res.data[cntry].region,
//       res.data[cntry].capital )
//   }
// })

export default Countries;