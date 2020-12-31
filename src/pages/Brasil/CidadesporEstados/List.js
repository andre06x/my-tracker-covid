/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

export function Head() {
  return (
    <thead>
      <tr>
        <th>Estado</th>
        <th>Cidades</th>
        <th>População </th>
        <th>Casos </th>
        <th>Mortes</th>
        <th>Letalidade</th>
      </tr>
    </thead>
  );
}

export function List({
  state, city, confirmed, deaths, estimated_population_2019,
}) {
  let letalidade = 0;
  letalidade = (deaths / confirmed) * 100;

  function a(city){

  }
  return (

    <tr>
      <td>{state}</td>
      <td>
        <Link to={`/cidade/${city}`}>{city}</Link>
      </td>
      <td>{ Number(estimated_population_2019).toLocaleString()}</td>
      <td>{confirmed.toLocaleString()}</td>
      <td>{deaths.toLocaleString()}</td>
      <td>
        {letalidade.toFixed(1).replace('.', ',')}
        %
      </td>
    </tr>
  // <h1>{state + "   "  + cases + "   "  + deaths}</h1>
  );
}
