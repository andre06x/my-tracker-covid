import React from 'react';
import { traduzir } from './check'
export function Head() {
  return (
    <thead>
      <tr>
        <th>Pais</th>
        <th>Confirmados</th>
        <th>Recuperados</th>
        <th>Mortes</th>
        <th>Letalidade</th>
      </tr>
    </thead>
  );
}

export function ListTable({ confirmed, country, deaths, recovered }) {
    let letalidade = 0;
    letalidade = (deaths / confirmed) * 100;

    country = traduzir.filter( novo => novo.country === country)
    country = country.map( novo => novo.traduzido)
    // country = check(country)
    return (

      <tr>
        <td>{country}</td>
        <td>{Number(confirmed).toLocaleString()}</td>
        <td>{Number(recovered).toLocaleString()}</td>
        <td>{Number(deaths).toLocaleString()}</td>
        <td>
          {letalidade.toFixed(1).replace('.', ',')}
          %
        </td>
      </tr>
    );
  }














