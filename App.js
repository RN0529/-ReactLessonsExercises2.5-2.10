import React, { useState } from 'react'

const App = () => {
  
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [filteredNames,setFilteredNames]= useState(persons)
  const [ newName, setNewName ] = useState('')
  const[newNumber, setNewNumber] = useState('')
  const[filter, setNewFilter] = useState('')

  const addName= (event) =>{
    event.preventDefault()
    console.log('button clicked', event.target)
    console.log(newName)
    console.log(persons)
    if(persons.filter(pers => pers.name === newName).length >0){
      alert(`${newName} is already added to phonebook`)
    }else{
      const person = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(person))
      console.log(persons)
      setNewName('')
      setNewNumber('')
    }
    

  }
  const handleNameChange = (eveb) =>{
    console.log(eveb.target.value)
    setNewName(eveb.target.value)
  }
  const handleNumberChange= (even) =>{
    console.log(even.target.value)
    setNewNumber(even.target.value)
  }
  const handleFilterChange=(eve)=>{
    console.log(eve.target.value)
    setNewFilter(eve.target.value)
    setFilteredNames(filter.length>0 ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())):persons )
  }

  
  return (
    <div>
      <h2>Phonebook</h2>
      <p>filtre shown with   
        <input value={filter} onChange={handleFilterChange}></input>
      </p>
      <h2>Add a new</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
          <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
        </div>
        
        
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <div>debug: {newName}</div>

      <h2>Numbers</h2>
      ...
      <ul>
        {
          filteredNames.map(auto => <li key={auto.name}>{auto.name}  {auto.number}</li>)
        }
      </ul>
    </div>
  )
}

export default App