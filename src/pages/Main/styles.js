import styled,{ css, keyframes } from 'styled-components'


export const Container = styled.div`

    max-width: 1000px;
    margin: 100px auto;
    padding: 50px;
    border-radius: 4px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    h1{
        width:100%;
        font-family: Arial, Helvetica, sans-serif;
        color: #5740b3;
    }
`

export const Title = styled.div`

`

export const Escolha = styled.div`
    padding:50px;
    display:flex;

    a {
       padding: 0 50px;
       border: solid 1px #eee;
       background-color: #eee;
       margin: 0 20px;
       border-radius: 5px;
       transition: 0.5s;

        :hover{
            background-color: #ddd;
        }

        svg{
            color:#5740b3;
        }
    }


`

const rotate = keyframes `
    from{
        transform: rotate(0deg)
    }
    to{
        transform: rotate(360deg)
    }
`


export const Dados = styled.div`
    display: flex;

    div{

        background-color:#eee;
        padding: 10px;
        margin:-20px 30px 0px 40px;
        ul {
            list-style: none;
            font-family: Arial, Helvetica, sans-serif;
            color: #5740b3;
      }

        li{
            font-size:14px;
            text-align: center;
        }
    }

    ${props => props.loadingImportant && css`
    svg{
        margin-top:30px;
        color:#5740b3;
        animation: ${rotate} linear 2s infinite
    }
    `}


`
