import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 


  const addPerson = (event) => {
    event.preventDefault();

    const isAlready = persons.some(person => person.name === newName)
      // we using some here as it is non-mutable  it means it does not change the array.
      if (isAlready=== true){
        alert(newName + " is already added to phonebook")
        return;
      }
      
    const newPerson = {
      name : newName,
      id : persons.length + 1,
      number : numbers,
    };

    const info= [...persons,newPerson];
    // copy the persons list and then add new person in that list.
    setPersons(info);
    setNewName('');
    setNumbers('');

  }
  const [newName, setNewName] = useState('')
  const [numbers , setNumbers] = useState('')
  const [namef , setNamef] = useState('')


  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
      }

  const  handleNumberChange = (event) => {
    console.log(event.target.value);
    setNumbers(event.target.value);
  }

  const handleNamef = (event) => {
    console.log(event.target.value);
    setNamef(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={handleNamef} value={namef}/>
      <PersonForm
      onSubmit={addPerson}
      nameValue={newName}
      onNameChange={handleNameChange}
      numberValue={numbers}
      onNumberChange={handleNumberChange}
                                        />
      <h2>Numbers</h2>
      <Persons persons={persons} namef={namef}/>
    </div>
  )
}

export default App
