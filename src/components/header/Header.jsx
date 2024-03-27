import { useContext, useRef, useEffect, useState } from "react"
import { StyledConfig, StyledContainer, StyledHeader, StyledRadio, StyledInput, StyledCheckbox, StyleButtonInstall } from "./styledHeader"
import { ThemeContext } from "../../context/themeContext"
import imgSoon from "../../../public/moon.png"
import imgSun from "../../../public/sun.png"
import LanContext from "../../context/lanContext"
import { Link } from "react-router-dom"

export const Header = ({setButtonPrevPwa}) => {

  const [isInstaledPwa, setIsInstaledPwa] = useState(true)
  const [deferredInstallPrompt, setDeferredInstallPrompt] = useState(null)

  useEffect(() => {
    window.addEventListener("beforeinstallprompt",(e)=>{
      e.preventDefault()
      setIsInstaledPwa(false)
      setButtonPrevPwa(false)
      setDeferredInstallPrompt(e)
    })
    
    window.addEventListener("appinstalled",(e)=>{
      setIsInstaledPwa(true)
      setButtonPrevPwa(true)
    })
  },[])  
  
  const InstallPwa = (e) => {
    if(deferredInstallPrompt) deferredInstallPrompt.prompt()
  }

  const {theme, handdleTheme} = useContext(ThemeContext)
  const {lan, handdleLan} = useContext(LanContext)
  

  const refLangText = useRef(null)
  const refThemeText = useRef(null)


  useEffect(()=> {
    if(refLangText.current) refLangText.current.translate = false
    if(refThemeText.current) refThemeText.current.translate = false
  },[])
  return (
    <StyledHeader>
        <StyledContainer>
          <Link to="/res-countries/dist/">
          <h1> Where in the world? </h1>
          </Link>
        
          <StyledConfig>
            <form ref={refLangText}>
              <StyledInput type="radio" value="es" name="lan" id="es" onClick={handdleLan} checked = {lan === "es"} />
              <StyledRadio htmlFor="es">español</StyledRadio>

              <StyledInput type="radio" value="en" name="lan" id="en" onClick={handdleLan} checked = {lan === "en"} />
              <StyledRadio htmlFor="en">english</StyledRadio>
            </form>
            <div>
              <StyledInput type="checkbox" id="theme" onClick={handdleTheme}/>
              <StyledCheckbox ref={refThemeText} htmlFor="theme"><img src={ theme == "Ligth" ? imgSoon : imgSun }/> <p> {theme === "Ligth"? "Dark" : "Ligth" } Mode</p></StyledCheckbox>
            </div>
              <StyleButtonInstall onClick={ InstallPwa } visibility = {isInstaledPwa}>install</StyleButtonInstall>
          </StyledConfig>
        </StyledContainer>
    </StyledHeader>
  )
}
