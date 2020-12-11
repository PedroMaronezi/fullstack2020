import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Display = (props) => {
  if (props.name === 'positive'){
    return(<div>{props.name} {props.value} %</div>)
  }

  return(<div>{props.name} {props.value}</div>)
}

const Header = (props) => <h1>{props.title}</h1>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const title = 'give feedback'
  const display = 'statistics'

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  const all = good + neutral + bad
  const average = (good*1 + neutral*0 + bad*(-1))/all
  const positive = 100*good/all

  return (
    <div>
      <Header title={title}></Header>
      <Button handleClick={handleGoodClick} text='good'></Button>
      <Button handleClick={handleNeutralClick} text='neutral'></Button>
      <Button handleClick={handleBadClick} text='bad'></Button>
      <Header title={display}></Header>
      <Display name='good' value={good}></Display>
      <Display name='neutral' value={neutral}></Display>
      <Display name='bad' value={bad}></Display>
      <Display name='all' value={all}></Display>
      <Display name='average' value={average}></Display>
      <Display name='positive' value={positive}></Display>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)