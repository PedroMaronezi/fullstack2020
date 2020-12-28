import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personsService from './services/persons';

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterName, setFilterName ] = useState('')


  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)

    const existingName = persons.some(person => person.name === newName)

    if (existingName){
      const confirm = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
      
      if(confirm) {
        const p = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
        const updatedPerson = {...p, number: newNumber}

        personsService
          .update(p.id, updatedPerson)
          .then(response => {
            setPersons(persons.map(person => person.id === p.id ? response : person))
            setNewName('')
            setNewNumber('')
          })
      }

    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }

      personsService
        .create(personObject)
        .then(createdPerson => {
          setPersons(persons.concat(createdPerson))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const deletePerson = id => {
    const p = persons.find(person => person.id === id)
    const popUp = window.confirm(`Delete ${p.name}?`)

    if(popUp){
      personsService
        .deletePerson(id)
        .then(() => setPersons(persons.filter(person => person.id !== id)))
        .catch(error => {
          console.log(error)
          setPersons(persons.filter(person => person.id !== id))
        })
    }
  }

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleFilterChange = (event) => setFilterName(event.target.value)

  const filteredPeople = persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase()))

  // Fetch data from the json-server
  useEffect(() => {
    personsService
      .getAll()
      .then(initialPeople => {
        console.log('promised resolved...')
        setPersons(initialPeople)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filterName} handleChange={handleFilterChange} />
      <h2>Add a new</h2>
      <PersonForm handleSubmit={addPerson} newName={newName} handleNameChange={handleNameChange}
      newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons persons={filteredPeople} handleClick={deletePerson} />
    </div>
  )
}

export default App