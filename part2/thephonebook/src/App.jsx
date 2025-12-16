import { useState , useEffect } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

import personService from './services/persons';


const App = () => {
  const [persons, setPersons] = useState([]) 

  const fetchPersons = () => {
        personService
        .getAll()
        .then(person => setPersons(person))
          // .get("http://localhost:3001/persons")
          // .then(response => {
          //   console.log("resposne fulfilled" ,response )
          //   setPersons(response.data)
          // })
  }


  useEffect(fetchPersons , []);

  const handleClick = (id) => {
    
      if (window.confirm("Do you want to delete this user")) {
          personService
          .deleteP(id) // return the promise to delete 
          .then(() => {
          setPersons(prev => prev.filter(p => p.id !== id)) // filter out the persons which is not with id it is being deletd
                        })
      } else {
        return ;
      }
  }

  
  
  // useEffect(deletePerson , [])
  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name : newName,
      // id : persons.length + 1,
      // Lets remove it and lets backend assign this itself not by ours
      number : numbers,
    };

    const isAlready = persons.some(person => person.name === newName) && persons.some(person => person.number === numbers)
      // we using some here as it is non-mutable  it means it does not change the array.
      if (isAlready=== true){
        alert(newName + " with same number is already added to phonebook")
        console.log("isAlready condition reached" , persons.some(person => person.name === newName) && persons.some(person => person.number === numbers))
        return;
      }
      else if(persons.some(person => person.name === newName))
        {
          console.log("name is only same no number same " ,persons.some(person => person.name === newName),persons.find(person => person.name === newName) )
          const sameName = persons.find(person => person.name === newName)
          if (window.confirm(sameName.name + " is already added to the phonebook ,replace the old one with new number")) 
          {
          personService
          .update(sameName.id , newPerson)
          .then(updatedperson =>{
              setPersons(prev => 
                prev.map (p => (p.id === updatedperson.id) ? {...p , number : updatedperson.number}: p)
              )
            })
          } 
          else 
            {
            return ;
            }
          }
      else{
        
    personService
    .create(newPerson)
    .then(person => {
      // const info= [...persons,person];
      // // copy the persons list and then add new person in that list.
      // setPersons(info);

      // This can cause the problem if multiple adds happen quickly , this can become stale.
      setPersons(prev => prev.concat(person));
      setNewName('');
      setNumbers('');

      
    }) 
      }
      
    

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


  return(
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
      <Persons persons={persons} namef={namef} onclick={handleClick}/>
    </div>
  )
}

export default App
