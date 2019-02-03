import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const courses = [
  {
    id: 1,
    name: 'Reactin perusteet',
    exercises: 10
  },
  {
    id: 2,
    name: 'Tiedonvälitys propseilla',
    exercises: 7
  },
  {
    id: 3,
    name: 'Komponenttien tila',
    exercises: 14
  },
  {
    id: 4,
    name: 'Redux',
    exercises: 7
  }

] 



ReactDOM.render(
  <App courses={courses} />,
  document.getElementById('root')
)
