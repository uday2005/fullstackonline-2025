import { useState } from 'react'

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
 

  const initialVotes = {};
  anecdotes.forEach((_,i) => {
    initialVotes[i] = 0;
  })

  const updateVotes = () => {
    const current = selected;
    const copy = {...votes };
    copy[current]  += 1;
    setVotes(copy);
  };
  // This set votes first copy the votes object and after that it goes to cuurent index and increase its votes specifically

   const [votes , setVotes] = useState(initialVotes)

  return (
    <div>
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <Button onClick={updateVotes} text="vote"/>
      <Button onClick={ () => setSelected(getRandomIntInclusive(0,7))} text="next anectode"></Button>
      
    </div>
  )
}



export default App