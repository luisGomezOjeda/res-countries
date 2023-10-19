import styled from "styled-components";
import { variables } from "../../styles/variables";
import { styledElemet } from "../../styles";
import { AccessTheme } from "../../helpers/accessTheme";

export const SectionListCountries = styled.section`
    width: 100%;
    max-width: ${variables.desktop};
    height: auto;
    margin: 0 auto;
    padding: 30px 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap : 30px 0;
    

    figure {
        width: 250px;
        height: 300px;
        ${styledElemet}
        cursor: pointer;
        transition : 0.2s;
        border : 5px ;
        margin : 0 20px ;
    }
    
    figure:hover {
        transition : 0.2s;
            transform : scale(1.1)
    }

    figure img{
        width: 100%;
        height: 180px;
        border-radius: 5px 5px 0 0;
        object-fit: cover;
        object-position: center;
    }
    
    figure ul {
        padding: 0 20px;
        display: flex;
        flex-direction: column;
        height: 90px;
        justify-content: space-evenly;
    }

    figure ul li h4{
        font-size: 1.8rem;
    }

    figure ul li p  {
        font-size: 1.2rem;
    }
    
`;

export const StyledMessageError = styled.article`
    height: 36.5vh;
    display: grid;
    place-items: center;
    padding: 50px 0 ;
    color : ${() => AccessTheme() === "Ligth" ? variables.Dark_color : variables.ligth_Elements };
    font-size: 1.6rem;
    img {
        width: 80px;
        margin : 20px 0;
    }
`;