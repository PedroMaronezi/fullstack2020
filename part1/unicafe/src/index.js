import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Display = (props) => (
  <div>{props.name} {props.value}</div>
)

const Header = (props) => <h1>{props.title}</h1>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const title = 'give feedback'
  const display = 'statistics'

  return (
    <div>
      <Header title={title}></Header>
      <Button handleClick={() => setGood(good + 1)} text='good'></Button>
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral'></Button>
      <Button handleClick={() => setBad(bad + 1)} text='bad'></Button>
      <Header title={display}></Header>
      <Display name='good' value={good}></Display>
      <Display name='neutral' value={neutral}></Display>
      <Display name='bad' value={bad}></Display>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)