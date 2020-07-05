import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
    from {
        transform: rotate(0deg)
    }
    to {
        transform: rotate(360deg)
    }
`

export const Container = styled.div`
    max-width: 1000px;
    margin: 100px auto;
    padding: 50px;
    border-radius: 4px;
    background-color:#fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${props => props.first && css`
        svg{
            display: none;
        }
    `}

    h1{
        font-family: Arial, Helvetica, sans-serif;
        color: #5740b3;
        display:flex;
        align-items:center;
    }

    svg{
        margin-top:30px;
        color:#5740b3;
        animation: ${rotate} linear 2s infinite
    }
`;


export const Escolha = styled.div`
    padding:30px;
    display:flex;

    a {
       padding: 20px 50px;
       border: solid 1px #eee;
       background-color: #eee;
       margin: 0 20px;
       border-radius: 5px;
       transition: 0.5s;
       text-decoration: none;
       font-size:34px;
       color: #5740b3;

        :hover{
            background-color: #ddd;
        }
    }


`;


export const Span = styled.span`
    margin:0%;
    padding:10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a{
        font-size:20px;
        padding-bottom:25px;
        text-decoration:none;
        color:#5740b3;
    }

    h1{
        margin-top: 20px;
    }
`;
