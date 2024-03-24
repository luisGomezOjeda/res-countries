import styled  from "styled-components"
import { variables } from "../../styles/variables";
import { styledElemet } from "../../styles/index";

export const StyledHeader = styled.header`
    width: 100%;
    height: 13vh;
    ${styledElemet}
    display: flex;
    justify-content: center;
    transition: 0.2s;
     box-shadow: -3px -3px 5px #000;
    `;

export const StyledContainer = styled.section`
    width: 100%;
    max-width: ${variables.desktop};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    @media(max-width: 770px){
        padding: 0 10px;
    }
    transition: 0.2s;

    a{
        text-decoration: none;
        color :inherit;
        transition: 0.2s;
        :hover{
            transform: scale(1.05);
            transition: 0.2s;
        }
    }

    a h1 {
        font-size: 1.8vw;
        @media(max-width: 770px){
            font-size: 1.8rem;
    }
    }
`;


export const StyledConfig = styled.section`
    width: 39%;
    height: 100%;
    display: inherit;
    justify-content: space-evenly;
    align-items: inherit;
    flex-wrap: wrap;
    font-size: 1.6rem;
    @media(max-width: ${variables.mobile}){
        font-size: 1.1rem;
    };
`;

export const StyledInput = styled.input`
    display : none;
`;

export const StyledRadio = styled.label`
    margin: 0 2px;
    transition: 0.2s;
    cursor: pointer;
    
    ${StyledInput}:checked + & {
        color:  rgb(54, 145, 182);
        font-weight: bolder;
        transition: 0.5s;
    }
    `;

export const StyledCheckbox = styled.label`
    width: 120px;
    height: 100%;
    display: block;
    line-height: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media(max-width:${variables.mobile}){
        width: 100px;
    }
`;

export const Styledcon = styled.img`
    width: 20px;
    height:20px;
    object-fit: contain;
`;
