import styled, { css, keyframes } from 'styled-components'

const rotate = keyframes`
    from{
        transform: rotate(0deg)
    }
    to{
        transform: rotate(360deg)
    }
`

export const Conteudo = styled.div`
    display:flex;
    max-width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    margin: 30px 0;

    div{
        margin-left: 40px;
        padding: 90px 30px;
        margin-top:3px;
        background-color: rgb(133,98,2226,1);
        border-radius:10px;

        @media(max-width: 600px){
            padding: 40px 30px;
            font-size: 1em;
            margin-top:9px;

        }

        svg{
            animation: ${rotate} linear 2s infinite;
        }
    }

    h2{
        text-align: center;
        color: #fff;
    }

    svg{
        color:#fff;
    }

    ${props => props.go && css`
        svg{
            animation: ${rotate} linear 2s infinite;
        }
    `}



`

export const UL = styled.ul `

`
