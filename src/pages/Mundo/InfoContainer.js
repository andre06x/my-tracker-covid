import React from 'react'
import { FaSpinner } from 'react-icons/fa';



function Confirmados ({ TotalConfirmed, NewConfirmed }){
    return(
        <>

        <h2>Confirmados</h2>
        <h2> {TotalConfirmed.toLocaleString()} </h2>
        <h2>+{NewConfirmed.toLocaleString()}</h2>
        </>

    )
}


function Mortes ({ TotalDeaths, NewDeaths }){
    return(
        <>
        <h2>Mortes</h2>
        <h2>{TotalDeaths.toLocaleString()}</h2>
        <h2>+{NewDeaths.toLocaleString()}</h2>
        </>

    )
}

function Recuperados ({ TotalRecovered, NewRecovered }){
    return(
        <>
        <h2>Recuperados</h2>
        <h2>{TotalRecovered.toLocaleString()}</h2>
        <h2>+{NewRecovered.toLocaleString()}</h2>
        </>

    )
}

function Letalidade ({ TotalConfirmed, TotalDeaths }){
    let letalidade = (TotalDeaths / TotalConfirmed)*100
    return(
        <>
        <h2>Letalidade</h2>
        <h2>{letalidade.toFixed(0)}%</h2>
        </>
    )
}


export default  function InfoContainer ({ TotalConfirmed, go, cases, TotalDeaths, TotalRecovered, NewConfirmed, NewDeaths, NewRecovered }){
    return (
            <>
            <div>
              { go ? (
                <FaSpinner size={30}/>
              ) : (
                  <Confirmados  TotalConfirmed={TotalConfirmed} NewConfirmed={NewConfirmed}/>
             )}
            </div>
           <div>
             { go ? (
                <FaSpinner size={30}/>
                ) : (
                <Mortes TotalDeaths={TotalDeaths} NewDeaths={NewDeaths}/>
              )}
            </div>
             <div>
             { go ? (
                <FaSpinner size={30}/>
                ) : (
                <Recuperados TotalRecovered={TotalRecovered}  NewRecovered={NewRecovered}/>
            )}
            </div>
            <div>
              { go ? (
                <FaSpinner size={30}/>
                ) : (
                <Letalidade TotalConfirmed={TotalConfirmed} TotalDeaths={TotalDeaths}/>
              )}
            </div>

        </>
    )
}

