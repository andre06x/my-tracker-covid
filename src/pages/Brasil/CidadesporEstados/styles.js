import styled, { css } from 'styled-components'

export const Estados = styled.div.attrs(props => ({
    name: props.changeColor
}))`

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;
    align-items:center;
    margin-bottom:40px;



    div {
        align-items:center;
        padding:25px;
        background-color: rgb(127,105,214,1);
        margin:10px 5px;
        border-radius: 10px;
        color: #fff;

        :hover{
            background-color: #5740b3;
            cursor: pointer;

        }


    }
    ${props => props.nonClick && css`
        div:hover{
            cursor: not-allowed;
        }
    `}



`
