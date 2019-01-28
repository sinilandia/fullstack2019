import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const generateRandomNumber = (value) => {
    let random = Math.random() * anecdotes.length

    //en ihan ymmärrä, miksi välillä "next anecdote"-buttonia painaessa 
    //sivusto ei näytä uutta anekdoottia.
    //luulin tämän johtuvan siitä, että satunnaisgeneraattori
    //generoi saman luvun, jolloin sama anekdootti näytetään.
    //nyt mielestäni looppasin tämän if-lauseella niin, että tämän sattuessa
    //satunnaislukugeneraattori arpoo uuden luvun
    //mutta tätä ei-uuden-anekdootin-näyttämistä tapahtuu edelleen!
    //ehkä netti pätkii? vai oliko tämä nyt sellainen tilanne, ettei if:iä saa käyttää?
    //vai onko laskurini väärin - tilaa ei saisi suoraan muuttaa setToSelectedissa alla?

    if (random === value) {
        return (
            generateRandomNumber(value)
        )
    }
    return (
        Math.floor(random)
    )
}

const addVotes = props => {
    const copy = [...props.votes]
    console.log([copy])
    console.log([props.votes])
    copy[props.selected] = +1
    return (
        copy
    )
}



const App = (props) => {
    const [selected, setSelected] = useState(0)
    const votes = new Array(anecdotes.length).fill(0)

    const setToSelected = newValue => {
        setSelected(newValue)
    }

    const setToVotes = newArray => {
        votes = newArray.map(value => value)
    }


    return (
        <div>
            <p>{props.anecdotes[selected]}</p>
            <Button handleClick={() => setToSelected(generateRandomNumber(selected))} text="next anecdote" />
            <Button handleClick={() => setToVotes(addVotes(props.votes={votes}, props.selected={selected}))} text="vote" />
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