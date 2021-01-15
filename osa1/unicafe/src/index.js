import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const Statistics = (props) => {
    return (
      <div>
        <div>Good {props.good}</div>
        <div>Bad {props.bad}</div>
        <div>All {props.good+props.neutral+props.bad}</div>
        <div>Average {(props.good*1+props.neutral*0+props.bad*(-1)) / (props.good+props.neutral+props.bad)}</div>
        <div>positive {(props.good / (props.good+props.neutral+props.bad)*100)}%</div>
      </div>
    )
}

const App = (props) => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodFeedback = () => setGood(good + 1)
  const badFeedback = () => setBad(bad + 1)
  const neutralFeedback = () => setNeutral(neutral + 1)

  return (
    <div>
      <h1>Give Feedback</h1>
      
      <Button
        handleClick={goodFeedback}
        text='good'
      />
      <Button
        handleClick={neutralFeedback}
        text='neutral'
      />     
      <Button
        handleClick={badFeedback}
        text='bad'
      />
      <h2>statistics</h2>
      <Statistics good={good} bad={bad} neutral= {neutral}
      />
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
