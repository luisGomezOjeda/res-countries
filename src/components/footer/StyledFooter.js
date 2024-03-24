import styled from "styled-components"
import { styledElemet } from "../../styles";


export const StyledFooter = styled.footer`
    width: 100%;
    height: 20vh;

    display: grid;
    place-items: center;
    
    ${styledElemet}
    box-shadow: 0px 3px 5px #1e2128;
    margin-top: 50px;
    transition: 0.2s;

    :hover {
        transform: scale(1.1);
        transition: 0.2s;
    }
    img{
        width: 70px;
    }
    `;
