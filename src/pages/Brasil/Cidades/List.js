import React from 'react'

export function Head(){
    return(
        <thead> 
            <tr>
                <th>Estados</th>
                <th>Cidades</th>                                
                <th>População </th>
                <th>Casos </th>
                <th>Mortes</th>
                <th>Letalidade</th>
            </tr>
         </thead>
    )
}

export function List({state, city, confirmed, deaths, confirmed_per_100k_inhabitants, estimated_population_2019}){


    let letalidade = 0;
        letalidade = (deaths/confirmed) *100
        return(
            
            <tr>
                <td>{state}</td>
                <td>{city}</td>
                <td>{ Number(estimated_population_2019).toLocaleString()}</td>
                <td>{confirmed.toLocaleString()}</td>
                <td>{deaths.toLocaleString()}</td>
                <td>{letalidade.toFixed(1).replace('.', ',')}%</td>
            </tr>
            // <h1>{state + "   "  + cases + "   "  + deaths}</h1>
        )

} 

