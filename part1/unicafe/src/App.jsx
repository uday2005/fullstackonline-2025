import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const Statistics = (props) => { 

  return(
    <>
     <div> statistics </div>
      <div> good {props.good}</div>  
      <div> neutral {props.neutral}</div>    
      <div> bad {props.bad}</div> 
      <div> all {props.all}</div>  
      <div>average {(props.good*1 + props.neutral*0 + props.bad*-1)/props.all}</div>
      <div>positive {(props.good /props.all)*100} %</div>
    </>
  )

}
const App = () => {
  const [good , setGood] = useState(0)
  const [neutral , setNeutral] = useState(0)
  const [bad , setBad] = useState(0)

  const handleGood = () => {
    setGood(good+1) }

  const handleNeutral = () => setNeutral(neutral+1)
  const handleBad = () => setBad(bad + 1)
  const all = good + neutral + bad

  console.log("all:" , all)
  const positive = good 
  console.log("positive" , positive)
  return (
    <div>
      <div> give feedback </div>
      <Button onClick={handleGood} text="good"/>
      <Button onClick={handleNeutral} text="neutral"/>
      <Button onClick={handleBad} text="bad"/>

      <Statistics good={good} bad={bad} neutral={neutral} all={all}></Statistics>
     
      </div>
  )
}

export default App