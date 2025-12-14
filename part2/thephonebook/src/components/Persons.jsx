const Persons = (props) => {
  console.log("persons" , props)
  return (
        props.persons
            .filter(person => person.name.toLowerCase().includes(props.namef.toLowerCase())) // filter expects a boolean check 
            .map(person => <div key = {person.id}> {person.name} ----- {person.number}</div>)
  )
}

export default Persons