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
            <table>
                <tr>
                    <td>hyvä</td>
                    <td>{plus}</td>
                </tr>
                <tr>
                    <td>neutraali</td>
                    <td>{props.neutral}</td>
                </tr>
                <tr>
                    <td>huono</td>
                    <td>{miinus}</td>
                </tr>
                <tr>
                    <td>yhteensä</td>
                    <td>{total}</td>
                </tr>
                <tr>
                    <td>keskiarvo</td>
                    <td>{ka}</td>
                </tr>
                <tr>
                    <td>positiivisia</td>
                    <td>{pos}%</td>
                </tr>
            </table>
        </div>
    )
}

//en nyt oikeastaan tarvitse tätä lainkaan...
//mutta ohjaaja pajassa sanoi, että pitäisi tehdä näin tehtävässä 1.10 :)
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
            <Button handleClick={() => setToGood(good + 1)} text="hyvä" />
            <Button handleClick={() => setToNeutral(neutral + 1)} text="neutraali" />
            <Button handleClick={() => setToBad(bad + 1)} text="huono" />

            <h1>statistiikka</h1>
            <div>
                <Display good={good} neutral={neutral} bad={bad} />

            </div>
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)
