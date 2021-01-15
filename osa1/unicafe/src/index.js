import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

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
      
      <div>Good {good}</div>
      <div>Neutral {neutral}</div>
      <div>Bad {bad}</div>
      <div>All {good+neutral+bad}</div>
      <div>Average {(good*1+neutral*0+bad*(-1)) / (good+neutral+bad)}</div>
      <div>positive {100*(good / (good+neutral+bad))}%</div>


    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
