import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([]) 

  const hook = () => {
    axios
          .get("http://localhost:3001/persons")
          .then(response => {
            console.log("resposne fulfilled" ,response )
            setPersons(response.data)
          })

  }
  useEffect(hook , []);

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
