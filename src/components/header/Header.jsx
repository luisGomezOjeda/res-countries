import { useContext } from "react"
import { StyledConfig, StyledContainer, StyledHeader, StyledRadio, StyledInput, StyledCheckbox } from "./styledHeader"
import { ThemeContext } from "../../context/themeContext"
import imgSoon from "../../../public/moon.png"
import imgSun from "../../../public/sun.png"
import LanContext from "../../context/lanContext"
import { Link } from "react-router-dom"


export const Header = () => {

  const {theme, handdleTheme} = useContext(ThemeContext)
  const {lan, handdleLan} = useContext(LanContext)

  return (
    <StyledHeader>
        <StyledContainer>
          <Link to="/res-countries/">
          <h1> Where in the world? </h1>
          </Link>
        
          <StyledConfig>
            <form>
              <StyledInput type="radio" value="es" name="lan" id="es" onClick={handdleLan} checked = {lan === "es"} />
              <StyledRadio htmlFor="es">español</StyledRadio>

              <StyledInput type="radio" value="en" name="lan" id="en" onClick={handdleLan} checked = {lan === "en"} />
              <StyledRadio htmlFor="en">english</StyledRadio>
            </form>
            <div>
              <StyledInput type="checkbox" id="theme" onClick={handdleTheme}/>
              <StyledCheckbox htmlFor="theme"><img src={ theme == "Ligth" ? imgSoon : imgSun }/> <p> {theme === "Ligth"? "Dark" : "Ligth" } Mode</p></StyledCheckbox>
            </div>
          </StyledConfig>
        </StyledContainer>
    </StyledHeader>
  )
}
