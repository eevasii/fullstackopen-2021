import React from 'react';
import ReactDOM from 'react-dom';

const Title = (props) => {
  return (
    <div>
      <h2>{props.course.name}</h2>
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
const Course = ({ course }) => {
  return (
    <div>
      <h2>{course.name}</h2>
    <Title course={course.parts}/>  
    <Content parts={course.parts}/>
    <Total parts={course.parts}/>
    </div>
  )
}



const Courses = ({course}) => {
  return (
      <div>
      <h1>Web Development Curriculum</h1>
      {course.map(course =>
      <Course key = {course.id} course = {course}/>
      
      )}
      </div>
  )
}
const App = () => {
  const course = [
    {
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
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  
  return (
    <div>
      <Courses course={course} />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))