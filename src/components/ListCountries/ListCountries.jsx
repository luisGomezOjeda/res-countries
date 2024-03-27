import { useState,useContext, useEffect } from "react"
import { SectionListCountries, StyledMessageError } from "./StyledListCountries"
import CountriesContext from "../../context/countriesContext"
import { helpSeparator } from "../../helpers/helpSeparator"
import { useNavigate } from "react-router"
import { ThemeContext } from "../../context/themeContext"

import imgErrorDark from "../../../public/error-dark.png"
import imgErrorLight from "../../../public/error-while.png"
import { CardsPlaceholder } from "../CardPlaceholder/CardPlaceholder"


export const ListCountries = () => {

   const [loading, setLoading] = useState(true)
   const { countries, fetchData, countriesData, setCountriesData, setCountry } = useContext(CountriesContext)
   const {theme} = useContext(ThemeContext)

   const navigate = useNavigate()

   useEffect(() => { 
     fetchData(setCountriesData);
     setLoading(false)
     
   }, [countries]);
    
   const handdleClickFigure = (currentCountry) => {
         const filterCountry = countriesData.find(country => country.name.common === currentCountry.name.common);
       setCountry(filterCountry)

       navigate(`/res-countries/dist/${currentCountry.cca3}`)

   }
   
    return (
    <SectionListCountries>
        {
          loading && <CardsPlaceholder/>
          
        }
        {
            !countriesData.errorTrue && countriesData.map((country,index) => 
            <figure key={index} onClick={() => handdleClickFigure(country)}>
                <img src={country.flags.svg} alt= {country.flags.alt} />
                <ul>
                  <li><h4>{country.name.common}</h4></li>
                  <li><p><b>Population : </b>{helpSeparator(country.population)} </p></li>
                  <li><p><b>Region : </b> { country.region } </p></li>
                  <li><p><b> Capital : </b> {country.capital} </p></li>
                </ul>
            </figure>)

          }
          {
            countriesData.errorTrue && <StyledMessageError theme = {theme}>
              <img src={theme === "Ligth" ? imgErrorLight : imgErrorDark } alt="icon error" />
              <p>{ countriesData.statusText }</p> 
            </StyledMessageError>
          } 

    </SectionListCountries>
  )
}
