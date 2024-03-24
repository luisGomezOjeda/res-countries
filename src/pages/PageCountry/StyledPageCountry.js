import styled from "styled-components"
import {variables} from "../../styles/variables"


export const StyledPageCountry = styled.section`
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



