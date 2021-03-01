import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
      </p>
  )
}

const Content = ({ parts }) => {
  
 return(
  <div>
          {parts.map(part => 
          <Part key = {part.id} part ={part}/>
          )}
      
  </div>
 )
 }
const Total = ({ parts }) => {

  const total = parts.reduce( (accumulator, currentValue)  => accumulator + currentValue.exercises, 0 )

  return (
    <div>
      <p>
        <b>Total of {total} exercises</b>
      </p>

    </div>
  )
}

const Course = (props) => {
  return (
      <div>
      <Header course={props.course}/>  
      <Content parts={props.course.parts}/>
      <Total parts={props.course.parts}/>
      </div>
  )
}
const App = () => {
    const course = {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }
  
  return (
    <div>
      <Course course={course} />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))