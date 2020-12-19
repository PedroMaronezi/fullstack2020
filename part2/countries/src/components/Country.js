import React from 'react';

const Country = ({ country }) => {
    return (
      <div>
            <h2>{country.name}</h2>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>

            <h3>Languages</h3>
            <ul>
                {country.languages.map(language => <li key={language.iso639_1}>{language.name}</li>)}
            </ul>

            <img src={country.flag} alt='Country flag' width='20%'/>
      </div>
    );
  };



export default Country;