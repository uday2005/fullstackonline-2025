import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const App = () => {
  const [persons, setPersons] = useState([
    
  ]) 

  const addPerson = (event) => {
    event.preventDefault();

    const newPerson = {
      name : newName,
      id : persons.length + 1
    };

    const name= [...persons,newPerson];
    setPersons(name);
    setNewName('')

  }
  const [newName, setNewName] = useState('')

    const handleNameChange = (event) => {
      console.log(event.target.value);
      setNewName(event.target.value);
    }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handleNameChange} value={newName}/>
        </div>
        <div>
          <button type="submit"> add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {
        persons.map(person => <div key = {person.id}> {person.name}</div>)
        }
    </div>
  )
}

export default App
