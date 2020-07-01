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
    margin-top:50px;
    border:solid 1px #fff;
    max-width: 900px;

    svg{
        color: #5740b3;
        animation: ${rotate} linear 3s infinite
    }

    
`

export const Table = styled.table`
        border: solid 1px #333;
        border-collapse: collapse;
        width:800px;
        font-family: Arial,Helvetica,sans-serif;
        color: rgb(87, 64, 179);
        font-size: 20px;
        
        tr,th,td{
            border:solid 1px black;
            text-align:center;
        }

    
`