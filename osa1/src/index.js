import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>
      Kurssi: {props.course}
    </h1>
    
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part[0].name} exercises={props.part[0].exercises} /> 
      <Part part={props.part[1].name} exercises={props.part[1].exercises} /> 
      <Part part={props.part[2].name} exercises={props.part[2].exercises} /> 
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        <b>Yhteensä:</b> {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises} tehtävää
      </p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack -sovelluskehitys',
    parts: [
      {
        name: 'Reactin perusteet',
        exercises: 10
      },
      {
        name: 'Tiedonvälitys propseilla',
        exercises: 7
      },
      {
        name: 'Komponenttien tila',
        exercises: 14
      }
    ]
  }
  
  return (
    <div>
      <Header course={course.name} />
      <h2>Sisältö:</h2>
      <Content part = {course.parts} />
      <Total total = {course.parts} />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))



