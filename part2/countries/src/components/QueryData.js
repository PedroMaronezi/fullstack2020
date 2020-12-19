import React from 'react';
import Country from './Country';

const QueryData = ({ countries }) => {
    console.log('# of countries:', countries.length);

    if(countries.length > 10){
        return(
            <div>Too many matches, specify another filter.</div>
        )
    } else if(countries.length > 1) {
        return(
            <div>
                {countries.map(country => <div key={country.name}>{country.name}</div>)}
            </div>
        )
    } else if(countries.length === 1) {
        console.log(countries[0])
        return(
            <Country country={countries[0]} />
        )
    } else {
        return(
            <div>No matches.</div>
        )
    }
}

export default QueryData