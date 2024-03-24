import React from 'react';
import { useContext, useEffect } from 'react';
import CountriesContext from '../../context/countriesContext';
import { helpSeparator } from '../../helpers/helpSeparator';
import { Link, useParams } from 'react-router-dom';
import { StyledArticle } from './StyledCountry';

export const SectionCountry = () => {
    const { country, setCountry } = useContext(CountriesContext);

    const keyCurrencies = Object.keys(country.currencies);
    const keyLanguages = Object.keys(country.languages);

    const currencies = keyCurrencies.map(key => country.currencies[key]);
    const languages = keyLanguages.map(key => country.languages[key]).join(",");

    const linkLocation = `https://www.google.com/maps/@${country.latlng[0]},${country.latlng[1]},10z?entry=ttu`;

    const { code } = useParams();
    
    useEffect(() => {
        console.log(country.cca3.trim());
        if(country.cca3 !== code ){
            const url = `https://restcountries.com/v3.1/alpha/${code}`;
            const getData = async (url) => {
                const data = await fetch(url);
                const json = await data.json();

                setCountry(json[0]);
            };
            
            getData(url);
        }
    });

    return(
        <StyledArticle>
            <h2>{country.name.common}</h2>
            <ul>
                <li> <p> <b>Native Name : </b> {country.name.official} </p></li>
                <li> <p> <b>Population : </b> {helpSeparator(country.population)} </p></li>
                <li> <p><b>Region : </b> {country.region} </p></li>
                <li> <p><b>Sub Region : </b> {country.subregion} </p></li>
                <li> <p><b> Capital : </b> {country.capital} </p></li>
            </ul>
            
            <ul>
                <li> <p> <b> Location : </b>
                <a href={linkLocation} target="_blank">{country.latlng[0]} , {country.latlng[1]}</a>
                </p> </li>
                <li> <p>
                    <b>Currencies : </b> 
                    {currencies.map((current, index, self) => index === self.length -1  ?  `${current.symbol} ${current.name}` : `${current.symbol} ${current.name} , `)}
                    </p> 
                </li>
                <li>
                    <p>
                    <b>Languages : </b>
                        {languages}
                    </p>
                </li>
                <li>
                 <p><b> Area : </b>
                { `${helpSeparator(country.area)} km²` }
                </p></li>
            </ul>
            <ul>
                <b>Border Countries : </b> 
                <div translate="no">
                    { country.borders && country.borders.map((code, index) => <Link to={`/res-countries/dist${code}`} key={index}> {code} </Link> ) }
                </div>
            </ul>
        </StyledArticle>
    )
}
