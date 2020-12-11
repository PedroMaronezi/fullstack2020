import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistic = ({name, value}) => (
  <tr>
    <td>{name}</td>
    <td>{value}</td>
  </tr>
)

// a proper place to define a component
const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = (good*1 + neutral*0 + bad*(-1))/all
  const positive = 100*good/all

  if (all === 0) {
    return(
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  } 

  return(
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <Statistic name='good' value={good}></Statistic>
          <Statistic name='neutral' value={neutral}></Statistic>
          <Statistic name='bad' value={bad}></Statistic>
          <Statistic name='all' value={all}></Statistic>
          <Statistic name='average' value={average}></Statistic>
          <Statistic name='positive' value={positive + '%'}></Statistic>
        </tbody>
      </table>
    </div> 
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good'></Button>
      <Button handleClick={handleNeutralClick} text='neutral'></Button>
      <Button handleClick={handleBadClick} text='bad'></Button>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)