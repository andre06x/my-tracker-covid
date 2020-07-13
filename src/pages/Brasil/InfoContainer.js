import React from 'react'
import { FaSpinner } from 'react-icons/fa';

function Confirmados ({ Confirmed, confirmed24 }){
    return(
        <>

        <h2>Confirmados</h2>
        <h2> {Confirmed.toLocaleString()} </h2>
        <h2>+{confirmed24.toLocaleString()}</h2>
        </>

    )
}


function Mortes ({ Deaths, deaths24 }){
    return(
        <>
        <h2>Mortes</h2>
        <h2>{Deaths.toLocaleString()}</h2>
        <h2>+{deaths24.toLocaleString()}</h2>
        </>

    )
}

function Recuperados ({ Recovered, recovered24 }){
    return(
        <>
        <h2>Recuperados</h2>
        <h2>{Recovered.toLocaleString()}</h2>
        <h2>+{recovered24.toLocaleString()}</h2>
        </>

    )
}

function Letalidade ({ Confirmed, Deaths }){
    let letalidade = (Deaths / Confirmed)*100
    return(
        <>
        <h2>Letalidade</h2>
        <h2>{letalidade.toFixed(0)}%</h2>
        </>
    )
}


export default  function InfoCotainer ({ Confirmed, go, cases, Deaths, Recovered, confirmed24, deaths24, recovered24 }){
    return (
            <>
            <div>
              { go ? (
                <FaSpinner size={30}/>
              ) : (
                  <Confirmados Confirmed ={ Confirmed } confirmed24={confirmed24}/>
             )}
            </div>
           <div>
             { go ? (
                <FaSpinner size={30}/>
                ) : (
                <Mortes Deaths={Deaths} deaths24={deaths24}/>
              )}
            </div>
             <div>
             { go ? (
                <FaSpinner size={30}/>
                ) : (
                <Recuperados Recovered={Recovered}  recovered24={recovered24}/>
            )}
            </div>
            <div>
              { go ? (
                <FaSpinner size={30}/>
                ) : (
                <Letalidade Confirmed={Confirmed} Deaths={Deaths}/>
              )}
            </div>

        </>
    )
}

