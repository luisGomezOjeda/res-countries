import styled,{css} from "styled-components"
import { AccessTheme } from "../helpers/accessTheme"
import { variables } from "./variables"

export const styledElemet = css`
    background-color: ${() => AccessTheme() === "Ligth" ?  variables.ligth_Elements
    : variables.Dark_elements };
    color : ${ () => AccessTheme() === "Ligth" ? variables.dark_Background
    : variables.ligth_Elements };
      box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.1);
`

export const StyledMain = styled.main`
  width: 100%;
  height: auto;
  min-height: 100vh;
  background-color: ${() => AccessTheme() === "Ligth" ? variables.ligth_background
  : variables.dark_Background };
`;

