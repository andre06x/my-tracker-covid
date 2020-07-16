import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
    from{
        transform: rotate(0deg)
    }

    to {
        transform: rotate(360deg)
    }
`;

export const ContainerTable = styled.div`
    margin-top:20px;
    max-width: 1000px;
    max-height:800px;
    /* padding:10px; */
    border-radius:10px;
    /* background-color: rgb(239,239,239,1); */


    ${props => props.overflow && css`
         overflow: scroll;
         border-top:solid 6px #eee;
         border-left: solid 6px #eee;

    `}

    svg{
        color: #5740b3;
        margin-right:10px;
        margin-left: 10px;
        animation: ${rotate} linear 2s infinite;
    }

    h1{
        display:flex;
        align-items: center;
        justify-content: center;
        font-size:1.5em;
        margin-bottom:10px;

    }

`;

export const Table = styled.table`
        border-radius:20px;
        max-height: 1000px;
        /* border: solid 1px #333; */
        background-color:#fff;
        border-collapse: collapse;
        width:900px;
        font-family: Arial,Helvetica,sans-serif;
        color: rgb(87, 64, 179);
        font-size: 20px;

        tr,th{
            /* border:solid 1px black; */
            border-right: solid 3px #eee;
            border-left: solid 3px #eee;
            /* border-radius:20px; */
            color: rgb(87, 64, 179);
            text-align:center;
            padding:3px;


        }
        th{
            padding: 5px;
            border-top:solid 3px #eee;
            border-bottom:solid 3px #eee;
        }

          tr {
            :hover{
                background-color: #eee;
                color:rgb(99,60,255,1);
                /* font-weight:bold; */

            }

            td:hover{
                font-size:1.14em;

            }
        }

        td{
            border-bottom: solid 1px #ccc;
            border-right: solid 1px #ccc;
            padding-bottom: 3px;
        }

        @media (max-width: 600px){
            font-size: 0.7em;
            overflow:scroll;
            max-width: 100px;
            ${props => props.sizeTable && css`
                font-size: 0.66em;
            `}

            ${props => props.sizeTable === 2 && css`
                font-size: 1em;
            `}
        }



`;
