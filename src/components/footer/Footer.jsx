import { StyledFooter } from "./StyledFooter"
import { ThemeContext } from "../../context/themeContext"
import { useContext } from "react" 
import darkGithub from "../../../public/github-dark.png"
import whileGithub from "../../../public/github-while.png"


export const Footer = () => {

    const { theme } = useContext(ThemeContext)

  return (
    <StyledFooter>
        <a href="https://github.com/luisGomezOjeda//" target="_blank">
            <img src={theme === "Ligth" ? whileGithub : darkGithub} alt="icon github" />
        </a>
    </StyledFooter>
  )
}
