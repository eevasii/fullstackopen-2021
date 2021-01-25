import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({handleClick,text} ) => {
  return(  
  <button onClick={handleClick}>
    {text}
  </button>
)}
const Vote = (props) => {
  return (
    <div>
      has {props.points[props.selected]} votes
    </div>
  )
}
const Highest = (props) => {
  let largest = 0;
  const maxPoints = Math.max(...props.points)
  const maxIndex = props.points.findIndex((item) => item === maxPoints)

  if (maxPoints === 0) {
    return (
      <div>
        No votes given
      </div>
    )
  }

    return (
      <div>
        {props.anecdotes[maxIndex]}
        <div>Has {maxPoints} votes</div>
      </div>
    
    )
  }

const App = (props) => {
  const points = Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0);
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(points)

  const voteAnecdote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }
  
  const handleClick = () => {
    const newIndex = Math.floor(Math.random() * (anecdotes.length - 0) + 0)
    setSelected(newIndex)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>
      {props.anecdotes[selected]}
      </div>
      <div>
      <Vote selected={selected} points={votes}/>
      </div>
      <Button 
      handleClick={voteAnecdote}
      text='vote'

      />
      <Button
      handleClick={handleClick}
      text='Next anecdote'
      />
      <h1>Anecdote with most votes</h1>
      <Highest points={votes} anecdotes={props.anecdotes}/>
    </div>
  )
}
const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)