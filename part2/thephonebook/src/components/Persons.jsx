const Persons = (props) => {
  console.log("persons" , props)
  return (
        props.persons
            .filter(person => person.name.toLowerCase().includes(props.namef.toLowerCase())) // filter expects a boolean check 
            .map(person => 
            <div key = {person.id}> 
            {person.name} ----- {person.number} {' '}
            <button onClick={() => props.onclick(person.id)}> Delete </button>
            {/* Here it should be like function not jut onclick(persion.id) as that will execuete instantely */}

            </div>
            )

  )
}

export default Persons