
import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip  } from 'recharts'
import axios from 'axios';

import { Container, Span } from '../../../components/Container/All';

const token = '3bd7b29a7cebed90c2daa903135394ad75f4a9a2';

const City = () => {

  const[data, setData] = useState([]);
  const[get, setGet] = useState(false);

    const { params } = useRouteMatch();
    const { city } = params;

    useEffect( () =>{
      async function request(){

        const response = await axios.get(`https://api.brasil.io/v1/dataset/covid19/caso/data/?city=${city}`,
        { headers: { 'Authorization': `Token ${token}` }});

        setData([response.data.results[195],response.data.results[180],response.data.results[165],response.data.results[150],response.data.results[135],response.data.results[120],response.data.results[105],response.data.results[90],response.data.results[75],response.data.results[60],response.data.results[45],response.data.results[30],response.data.results[15],response.data.results[0] ])
        setGet(true);
    };

    request();
       // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return(
    <Container>
      <Span>
          <Link to="/brasil">Voltar</Link>
      </Span>
      <h1>{city}</h1>
      {
        get ? (
          <>
          <h1 style={{ fontSize: 20, margin: 10, }}>Casos Confirmados a cada 15 dias</h1>
          <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="confirmed" stroke="#8884d8" />
            <CartesianGrid stroke="#bbb" />
            <XAxis dataKey="date" />
            <Tooltip/>
            <YAxis />
          </LineChart>

          <h1 style={{ fontSize: 20, margin: 10, }}>Mortes Confirmadas a cada 15 dias</h1>
          <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="deaths" stroke="#8884d8" />
            <CartesianGrid stroke="#bbb" />
            <XAxis dataKey="date" />
            <Tooltip/>
            <YAxis />
          </LineChart>
          </>
        ) : (
          <h1 style={{margin: 20, fontSize: 15}}>Carregando Dados ...</h1>
        )
      }
    </Container>
  )}


export default City;
