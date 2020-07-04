import styled from 'styled-components';

export const Title = styled.h2`
    color:black;
    font-family: Arial, Helvetica, sans-serif;
    color: #5740b3;
    display:flex;
    font-size:40px;
    align-items:center;
    padding:50px;

    span{
        margin-left:10px;
    }

`;

export const Span = styled.span`
       a {
       color: #6e58c3;
       font-family: Arial, Helvetica, sans-serif;
       font-size:30px;
       text-decoration:none;
       /* transition:ease 1s; */
        font-weight:bold;

        :hover{
        color: rgb(71,49,190);
    }
 }
`;
