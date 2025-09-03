function Header(props){
  console.log(props)
  return(
    <>
    <h1>{props.course}</h1>
    </>
  )
}

function Part(props){
  return(
    <>
    <p>{props.part} {props.exercises}</p>
    </>
  )
}

function Content(props){
  return(
    <div>
    <Part part={props.part1} exercises = {props.exercise1}/>
    <Part part={props.part2} exercises = {props.exercise2}/>
    <Part part={props.part3} exercises = {props.exercise3}/>
    </div>
  )
}

function Total(props){
  return (
    <>         
    <p>Number of exercises {props.e1+ props.e2+ props.e3}</p>
    </>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1.name} exercise1={part1.exercises}
               part2 = {part2.name} exercises2={part2.exercises}
               part3 = {part3.name} exercise3={part3.exercises}/>
      <Total e1={part1.exercises} e2={part2.exercises} e3={part3.exercises}/>
    </div>
  )
}

export {Content}
export default App