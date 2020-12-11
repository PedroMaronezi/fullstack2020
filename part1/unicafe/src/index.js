import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

// a proper place to define a component
const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = (good*1 + neutral*0 + bad*(-1))/all
  const positive = 100*good/all

  return(
    <div>
      <h1>statistics</h1>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {all}</div>
      <div>average {average}</div>
      <div>positive {positive} %</div>
    </div> 
  )
}

const Header = (props) => <h1>{props.title}</h1>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const title = 'give feedback'

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <Header title={title}></Header>
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