function Header(props){
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
    <Part part={props.part2} exercises = {props.exercises2}/>
    <Part part={props.part3} exercises = {props.exercises3}/>
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
function App() {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} exercise1={exercises1}
          part2={part2} exercise2={exercises2}
          part3={part3} exercise3={exercises3}/>
      <Total e1={exercises1} e2={exercises2} e3={exercises3}/>
    </div>
  )
}

export {Content}
export default App