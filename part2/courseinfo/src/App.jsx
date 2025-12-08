import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


const Header = (props) => <h1>{props.course}</h1>

const Content = (props) => {
  console.log("content props" ,props)
  return(
  <div>
    {props.parts.map((part) => (
      <Part key={part.id} part={part} />
    ))}
  </div>
  )
}

const Part = (props) => {
  console.log("part props " , props);
  return(
  <p>
    {props.part.name} {props.part.exercises}
  </p>
  )
}

const Course = (courses) => {
  console.log("course" , courses);
  console.log(courses.courses[0].parts[0].exercises)
  const sum1 = courses.courses[0].parts.reduce((accumulator,part) => accumulator+part.exercises , 0)
  const sum2  = courses.courses[1].parts.reduce((accumulator,part) => accumulator+part.exercises , 0)
  // const tot = courses.courses.reduce((accumulator , pre) => accumulator + pre[0].parts.exercises+pre[1].parts.exercises ,0)
  // const total = course.course.parts[0].exercises + course.course.parts[1].exercises + course.course.parts[2].exercises;
  const total = courses.courses.map((courses)=> courses.parts.reduce((accumulator,part) => accumulator+part.exercises , 0))
  const grandTotal = total.reduce((acc, n) => acc + n, 0);
  console.log("grandTotal", grandTotal);
  console.log("total" , total)
  console.log(sum1 ,sum2);
  return(
  <>
  {courses.courses.map((course,idx) => (
  <div key={course.id}>
    <Header course={course.name} />
    <Content parts={course.parts} />
     <Total total={total[idx]}/>
  </div>
  ))}
  </>
  )
}

const Total = (props) => <p>total of {props.total}  exercises</p>

const App = () => {
    const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  console.log("App working")

  return <Course courses={courses} />
}

export default App
