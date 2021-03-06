import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

// Get all the people
const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

// Create a new contact
const create = newPerson => {
    const request = axios.post(baseUrl, newPerson)
    return request.then(response => response.data)
}

// Delete an existing contact
const deletePerson = id => {
    return axios.delete(`${baseUrl}/${id}`)
}

// Update an existing contact
const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

const service = { getAll, create, deletePerson, update }

export default service;