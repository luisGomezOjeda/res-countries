import { useContext, useEffect, useState } from "react"
import CountriesContext from "../../context/countriesContext"
import { SectionCountry } from "../../components/sectionCountry/SectionCountry"
import { StyledPageCountry, StyledButtonPrev,  } from "../PageCountry/StyledPageCountry"
import { ThemeContext } from "../../context/themeContext"
import { useNavigate  } from "react-router-dom" 

export const PageCountry = ({buttonPrevPwa}) => {
    const { country } = useContext(CountriesContext)
    const { theme } = useContext(ThemeContext)
    const navigate = useNavigate()


    const handdlePrev = (e) => navigate(-1)

    return(
        <StyledPageCountry>
           <StyledButtonPrev theme = {theme} active = { buttonPrevPwa } onClick={handdlePrev}></StyledButtonPrev> 
            <img src={country.flags.svg} alt={country.flags.alt} />
            <SectionCountry/>
        </StyledPageCountry>
    )
}
