import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}


const StatisticLine = (props) => {
  return (
    <>
    <div className='statistic-line'>{props.text} {props.value} </div>
    </>
  )

}

const Statistics = (props) => { 
  return(
    <>
      <div className='statistic-title'>   STATISTICS    </div>
      <StatisticLine text="good" value={props.good}/>
      <StatisticLine text="neutral" value={props.neutral}/>    
      <StatisticLine text="bad" value={props.bad}/>    
      <StatisticLine text="all" value={props.all}/>    
      <StatisticLine text="average" value={(props.good*1 + props.neutral*0 + props.bad*-1)/props.all}/>
      <StatisticLine text="positive"  value={((props.good /props.all)*100).toFixed(1)+"%"}/>
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
      {all > 0 ?
         (<Statistics good={good} bad={bad} neutral={neutral} all={all}></Statistics>) : <div> No feedback given </div>
     
      }
      </div>
  )
}

export default App