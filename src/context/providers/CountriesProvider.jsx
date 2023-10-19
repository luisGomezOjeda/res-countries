import { useReducer, useState } from "react"
import CountriesContext from "../countriesContext"
import { countriesReducers, init } from "../reducers/countriesReducers"


export const CountriesProvider = ({ children }) => {
  
  const initialState = []

  useState()

  const [countries, dispatchCountries] = useReducer(countriesReducers, initialState, init)
  const [countriesData, setCountriesData] = useState([]);
  const [country, setCountry] = useState({})


  const fetchData = async (setState) => {
    try {
      const result = await countries;
      setState(result);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  const data = { countries, dispatchCountries, fetchData, countriesData, setCountriesData,country, setCountry }


  return (
    <CountriesContext.Provider value={data}>{children}</CountriesContext.Provider>
  )
}
