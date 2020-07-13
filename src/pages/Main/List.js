import React from 'react'

export  function Mundo({ confirmed }){
    return(
        <div>
            <ul>
                <li>Confirmados: {parseInt(confirmed).toLocaleString()}</li>
            </ul>
        </div>
    )
}

export  function Brasil({confirmed}){
    return(
        <div>
          <ul>
            <li>Confirmados:  {parseInt(confirmed).toLocaleString()}</li>
        </ul>
    </div>
)

}
