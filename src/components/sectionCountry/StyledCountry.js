import styled from "styled-components"
import { variables } from "../../styles/variables"
import { AccessTheme } from "../../helpers/accessTheme"
import { styledElemet } from "../../styles";

export const StyledArticle = styled.article`
      display: flex;
      justify-content: space-between;
      gap: 20px 0;
      color : ${() => AccessTheme() === "Ligth" ? variables.Dark_color : variables.ligth_Elements };
      
      @media(max-width: 926px){
        flex-direction:   column;
        
      }
      
      h2{
        font-size: 2.5em;
        line-height: 3.5rem;
        width: 100%;
      } 
      
      ul {
        width: 40%;
        @media(max-width: 926px){
          width: 100%;
        }

      }
      

      ul li a {
        text-decoration: none;
        color :#0f8ad7;
      }

      ul li p{
        width: 100%;
        font-size: 1.4rem;
        line-height: 3rem;
        font-weight: 200;
        @media(max-width: 926px){
          font-size: 1.6rem;
          letter-spacing: 1.5px;
           
        }
      }
      
      

      ul:nth-child(4){
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        
        b{
          line-height: 30px;
          width :30%;
          height: 100%;
          font-size: 1.4rem;
        }

        div{
          width: 70%;
        }

        a{
          height: 10%;
          display: inline-block;
          width: 120px;
          height: 30px;
          line-height: 30px;
          font-weight: 200;
          margin: 5px 5px;
          text-align: center;
          font-size: 1.6rem;
          ${ styledElemet };
          text-decoration: none;
        }
      }
`;