import { useState } from "react";
import Body from "./components/Body";

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Ada Lovelace', number: '123456'},
    {name: 'Arto Hellas', number: '123456'},
    {name: 'Uncle Bob', number: '123456'},
    {name: 'Vinicius Scorza', number: '994037634'},
    {name: 'Paula Hemsi', number: '981666968'},
    {name: 'Corujoca', number: '123456789'},
    {name: 'Gopherzito', number: '1020304050'}
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [showAll, setShowAll] = useState(true)

  const personsToShow = showAll
    ? persons
    : persons.filter(person => person.name.replace(/\s/g, '').toLowerCase().includes(newFilter.replace(/\s/g, '').toLowerCase()))

  const addperson = (event) => {
    let newPersonObject = {}
    let nameExists = false
    let numberExists = false
    let numberAlreadyRegisteredMessage

    persons.forEach(person => {
      let nameAlreadyRegisteredMessage = `${person.name} is already added to phonebook`
      numberAlreadyRegisteredMessage = `${person.number} is already added to phonebook to ${person.name} contact.\nDo you want to add it anyway?`
      
      if (person.name.toLowerCase().replace(/\s/g, '') === newName.toLowerCase().replace(/\s/g, '')){
        alert(nameAlreadyRegisteredMessage)
        nameExists = true
      }

      if (person.number === newNumber)
        numberExists = true
    })

    if (!nameExists)
    {
      if (numberExists){
        if (window.confirm(numberAlreadyRegisteredMessage)){
          newPersonObject = {
            name: newName,
            number: newNumber
          }
          setPersons(persons.concat(newPersonObject))
        }
      }
      else {
        newPersonObject = {
          name: newName,
          number: newNumber
        }
        setPersons(persons.concat(newPersonObject))
      }
    }

    event.preventDefault()
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
    if (event.target.value !== '')
      setShowAll(false)
    else
      setShowAll(true)
  }

  return (
    <div>
      <h1>Phonebook</h1>

      <Body persons={personsToShow} 
            newName={newName} 
            handleNameChange={handleNameChange} 
            newNumber={newNumber} 
            handleNumberChange={handleNumberChange} 
            addperson={addperson}
            newFilter={newFilter}
            handleFilterChange={handleFilterChange}
            />
    </div>
  )
}

export default App;
