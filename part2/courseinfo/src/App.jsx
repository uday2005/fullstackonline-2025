import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


const Header = (props) => <h1>{props.course}</h1>

const Content = (props) => (
  <div>
    <Part part={props.parts[0]} />
    <Part part={props.parts[1]} />
    <Part part={props.parts[2]} />
  </div>
)

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Course = (course) => {
  console.log("course" , course);
  console.log(course.course.parts[0].exercises)
  const sum = course.course.parts.reduce((accumulator,part) => accumulator+part.exercises , 0)
  // const total = course.course.parts[0].exercises + course.course.parts[1].exercises + course.course.parts[2].exercises;
  console.log(sum);
  return(
  <div>
  <Header course={course.course.name} />
  <Content parts={course.course.parts} />
  <Total total={sum}/>
  </div>
  )
}

const Total = (props) => <p>total of {props.total}  exercises</p>

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  }

  console.log("App working")

  return <Course course={course} />
}

export default App
