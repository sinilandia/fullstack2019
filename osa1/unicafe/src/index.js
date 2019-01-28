import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = props => {
    const total = props.good + props.neutral + props.bad
    const plus = props.good
    const miinus = props.bad
    const ka = (plus - miinus) / total
    const pos = props.good / total * 100

    if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
        return (
            <div>
                Ei yhtään palautetta annettu
            </div>
        )
    }

    return (
        <div>
            <Statistiikka text="hyvä" value={props.good} />
            <Statistiikka text="neutraali" value={props.neutral} />
            <Statistiikka text="huono" value={props.bad} />
            <Statistiikka text="yhteensä" value={total} />
            <Statistiikka text="keskiarvo" value={ka} />
            <Statistiikka text="positiivisia" value={pos+"%"} />
        </div>
    )
}

const Statistiikka = props => {
    return (
        <div>
            {props.text} {props.value}
        </div>
    )
}

const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = newValue => {
    setGood(newValue)
  }

  const setToNeutral = newValue => {
    setNeutral(newValue)
  }

  const setToBad = newValue => {
    setBad(newValue)
  }

  return (
    <div>
      <h1>anna palautetta</h1>
      <Button handleClick={() => setToGood(good+1)} text="hyvä" />
      <Button handleClick={() => setToNeutral(neutral+1)} text="neutraali" />
      <Button handleClick={() => setToBad(bad+1)} text="huono" />

      <h1>statistiikka</h1>
      <div>
          <Display good={good} neutral={neutral} bad={bad}/>
          
      </div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
