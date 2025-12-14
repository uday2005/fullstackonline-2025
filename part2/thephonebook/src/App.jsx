import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

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

    <div>
      filter shown with <input onChange={handleNamef} value={namef}/>
    </div>
    
      <form onSubmit={addPerson}>
        <div>New info</div>
        <div>
          name: <input onChange={handleNameChange} value={newName}/>
        </div>
        <div>
          number: <input onChange={handleNumberChange} value={numbers}/>
        </div>
        <div>

        </div>
        <div>
          <button type="submit"> add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {
        persons
            .filter(person => person.name.toLowerCase().includes(namef.toLowerCase())) // filter expects a boolean check 
            .map(person => <div key = {person.id}> {person.name} ----- {person.number}</div>)
        }
    </div>
  )
}

export default App
