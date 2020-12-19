import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import QueryData from './components/QueryData';
import axios from 'axios';

const App = () => {
  const [ countries, setCountries ] = useState([]) 
  const [ filterCountry, setFilterCountry ] = useState('')

  // Fetch data from the json-server
  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promised resolved...')
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => setFilterCountry(event.target.value)
  const handleShowButton = (name) =>  setFilterCountry(name)

  const filteredCountries = countries.filter(country => 
    country.name.toLowerCase().includes(filterCountry.toLowerCase())
  )

  return (
    <div>
      <Filter value={filterCountry} handleChange={handleFilterChange} />
      <QueryData countries={filteredCountries} handleClick={handleShowButton}/>
    </div>
  )
}

export default App