import { useState } from 'react'




const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}
const App = () => {
  const [good , setGood] = useState(0)
  const [neutral , setNeutral] = useState(0)
  const [bad , setBad] = useState(0)

  const handleGood = () => {
    setGood(good+1)
    console.log(good) }

  const handleNeutral = () => setNeutral(neutral+1)
  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <div> give feedback </div>
      <Button onClick={handleGood} text="good"/>
      <Button onClick={handleNeutral} text="neutral"/>
      <Button onClick={handleBad} text="bad"/>

      <div> statistics </div>
      <div> good {good}</div>  
      <div> neutral {neutral}</div>    
      <div> bad {bad}</div>      
      </div>
  )
}

export default App