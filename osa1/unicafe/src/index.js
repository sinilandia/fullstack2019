import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistiikka = props => {
    const total = props.good + props.neutral + props.bad
    const plus = props.good
    const miinus = props.bad
    const ka = (plus - miinus) / total
    const pos = props.good / total * 100

    if (props.good === 0 && props.neutral === 0 && props.bad === 0){
        return (
            <div>
                Ei yhtään palautetta annettu
            </div>
        )
    }

    return (
        

        <div>
        hyvä {props.good} <br />
        neutraali {props.neutral}<br />
        huono {props.bad} <br />
        yhteensä {total} <br />
        keskiarvo {ka}<br />
        positiivisia {pos}%
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
          <Statistiikka good={good} neutral={neutral} bad={bad} />
      </div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
