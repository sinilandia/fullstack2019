import React from 'react';
import Course from './components/Course'
//import Total from './components/Total';






const App = ({courses}) => {
  const rows = () => courses.map(course =>
    <Course
      key={course.id}
      course = {course}
    />
  )

  //reduce():n sisälle funktio
  //accumulator = luvut summautuvat tähän
  //currentValue = käsillä oleva luku taulukossa, jonka map() tekee
  // vika 0 = lähtöarvo
  const total = () => courses.map(course => course.exercises).reduce(
    (accumulator, currentValue) => accumulator + currentValue, 0
  )
  
   
  
//tässä ei tarvitse <ul> mut näyttää sisennys kivemmalta
  return (
    <div>
      <h1>muista lisätä tämä: Half Stack -sovelluskehitys</h1>
      <ul>
        {rows()}
      </ul>
      <ul>
        YHTEENSÄ: {total()}
      </ul>
    </div>
  )
} 

export default App