import styled from "styled-components"
import {variables} from "../../styles/variables"
import { styledElemet } from "../../styles";
import imgDarkprev from "../../../public/arrow-dark.png"
import imglightprev from "../../../public/arrow-light.png"



export const StyledPageCountry = styled.section`
    position: relative;
    width: 100%;
    min-height: 87vh;
    height: auto;
    max-width: ${variables.desktop};
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 0 60px;
    @media(max-width:926px){
        padding: 50px 0;
        flex-direction: column;
          gap: 40px 0;
        }

        
        img {
          
        justify-self: flex-start;
        width: 30%;
        max-height: 300px;
        object-fit: cover;
        object-position: center;
        min-width: 310px;
        @media(max-width:926px){
            width: 60%;
            max-height: 300px;
            margin-top: 80px;
        }
    }



    article {
        width: 45%;
        min-width: 300px;
        display: flex;
        flex-wrap: wrap;
    }
    @media(max-width:926px){
        width: 100%;
    }
`;


    export const StyledButtonPrev = styled.button`
        ${styledElemet}
        display: ${props => props.active ? "block" : "none" };
        width: 150px;
        height: 50px;
        padding: 15px 20px;
        position: absolute;
        background-image: url(${props => props.theme === "Ligth" ? imglightprev : imgDarkprev});
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        left: 0;
        top: 10%;
        margin : 20px;
        cursor : pointer;

        @media(max-width:926px) {
            padding: 0;
            top: 0;
        }
        @media(max-width:566px) {
            margin: 10px;
            width: 100px;
        }
    `;