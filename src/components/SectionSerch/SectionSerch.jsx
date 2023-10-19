import { useContext, useState } from "react"
import { StyledSerch, StyledText, StyledSelect, LabelError } from "./styledSerch"
import CountriesContext from "../../context/countriesContext"
import LanContext from "../../context/lanContext"
import { serchEn, serchEs } from "../../context/actions"



export const SectionSerch = () => {

  const { dispatchCountries } = useContext(CountriesContext)
  const { lan } = useContext(LanContext)
  const [inputText, setInputText] = useState("")
  const [error, setError] = useState({})


  const handdleSerchName = (e) => {
    e.preventDefault()
    handdleBlurText()
      if(Object.keys(error).length === 0) {
        
        if( lan == "en" ){
          console.log(lan)
          const url = `https://restcountries.com/v3.1/name/${inputText}`
          dispatchCountries((serchEn(url)))
        }else{
          console.log(lan)
          dispatchCountries((serchEs(inputText)))
        }
        
      }

    } 
  
  const handdleText = (e) => {
    setInputText(e.target.value.trim())
  }

  const handdleBlurText = () => {
    const regex = /^(?:[A-Z][a-z]*\s*)+$/;
    let error = {}
    if(!regex.test(inputText)) error = {message : " All ords start with a capital letter "} 
    if(inputText.length === 0) error = { message : " You must write a country " }
    setError(error) 
  }


  const handdleSelect = (e) => {
    if(e.target.value != ""){
      const url = `https://restcountries.com/v3.1/region/${e.target.value}`
      dispatchCountries(serchEn(url))
      setError({})
    }
  }

  return (
    <StyledSerch>
        <section>
          <StyledText onSubmit={handdleSerchName}>
            <input type="submit" value=" " name="SerchName"/>
            <input type="text" placeholder="Search for a Country..." onChange={handdleText} onBlur={handdleBlurText}/>
            
            <LabelError error = {error}>{error.message && error.message}</LabelError>

          </StyledText>
          <StyledSelect onChange={handdleSelect}>
            <option>Filter By Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </StyledSelect>
        </section>
    </StyledSerch>
  )
}
