import styled, { keyframes } from 'styled-components' 

const rotate = keyframes `
    from{
        transform: rotate(0deg)
    }

    to {
        transform: rotate(360deg)
    }
`

export const ContainerTable = styled.div`
    margin-top:20px;
    border:solid 1px #fff;
    max-width: 1000px;
    
    svg{
        color: #5740b3;
        margin-right:10px;
        animation: ${rotate} linear 2s infinite
    }

    h1{
        display:flex;
        align-items: center;
        justify-content: center;
        font-size:1.5em;
        margin-bottom:10px;

    }

`

export const Table = styled.table`
        max-height: 1000px;
        border: solid 1px #333;
        border-collapse: collapse;
        width:900px;
        font-family: Arial,Helvetica,sans-serif;
        color: rgb(87, 64, 179);
        font-size: 20px;
        
        tr,th,td{
            border:solid 1px black;
            text-align:center;
        }
        th{
            padding: 5px;
        }

`