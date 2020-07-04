/* eslint-disable react/prop-types */
import React from 'react';

export function List({ cases, state, deaths }) {
  let letalidade = 0;
  letalidade = (deaths / cases) * 100;
  return (

    <tr>
      <td>{state}</td>
      <td>{cases.toLocaleString()}</td>
      <td>{deaths.toLocaleString()}</td>
      <td>
        {letalidade.toFixed(1).replace('.', ',')}
        %
      </td>
    </tr>
  // <h1>{state + "   "  + cases + "   "  + deaths}</h1>
  );
}

export function Head() {
  return (
    <thead>
      <tr>
        <th>Estado</th>
        <th>Casos Confirmados</th>
        <th>Mortes</th>
        <th>Letalidade</th>
      </tr>
    </thead>
  );
}
