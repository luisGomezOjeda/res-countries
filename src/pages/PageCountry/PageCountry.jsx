import { useContext } from "react"
import CountriesContext from "../../context/countriesContext"
import { SectionCountry } from "../../components/sectionCountry/SectionCountry"
import { StyledPageCountry } from "../PageCountry/StyledPageCountry"
    

export const PageCountry = () => {

    const { country } = useContext(CountriesContext)



    return(
        <StyledPageCountry>
            
            <img src={country.flags.svg} alt={country.flags.alt} />
            <SectionCountry/>
        </StyledPageCountry>
    )
}
