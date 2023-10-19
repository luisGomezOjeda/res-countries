import styled from "styled-components";
import { styledElemet } from "../../styles/index";
import { variables } from "../../styles/variables";
import serch from "../../../public/serch.png";


export const StyledSerch = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    section{
        width: 100%;
        max-width: ${variables.desktop};
        min-height: 80px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
        padding: 0 10px;
        padding-top:20px;
    }
`;

export const StyledText = styled.form`
    width: 310px;
    height: 35px;
    border-radius: 5px;
    ${styledElemet}
    margin: 40px 10px;
    position: relative;
    
    input[type="text"] {
        padding-left : 15px ;
        background-color: transparent;
        border : none;
        width: 85%;
        color: inherit;
        &::placeholder{
            color: inherit;
            opacity: 0.6;
        }
        height: 100%;
        border-radius:  0 5px 5px 0 ;
        outline: none;
    }
    input[type="submit"]{
        width: 15%;
        height: 100%;
        background-color: transparent;
        border-radius: 5px 0 0 5px  ;
        outline: none;
        background-image: url(${serch});
        background-size : 45%;
        background-repeat: no-repeat;
        background-position: center;
    }
`;

export const LabelError = styled.label`
    background-color: #b12525;
    visibility: ${props => props.error.message ? "visivility" : "hidden" };
    color: #ffff;
    width: 100%;
    height: 30px;
    position: absolute;
    left: 0;
    top: 35px;
    text-align: center;
    line-height: 30px;
    font-size: 1.4rem;
    border-radius: 5px;
`;

export const StyledSelect =  styled.select`
    outline: none;
    width: 200px;
    height: 35px;
    ${styledElemet}
    border : none;
    font-family: 'Nunito Sans', sans-serif;
    padding: 0 15px;
    border: none;
    line-height: 34px;
    border-radius: 5px;

    option{
        font-size: 1.6rem;
        border: none;
        &:active{
            background-color: red;
        }
    }
`;
