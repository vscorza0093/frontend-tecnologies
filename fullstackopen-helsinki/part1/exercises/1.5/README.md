## Resolution 1.5

```js
const App = () => {
  const course = {
    name:'Desenvolvimento de aplicação Half Stack',
    parts: [
      {
        name:'Fundamentos da biblioteca React',
        exercises: 10
      },
      { 
        name: 'Usando props para passar dados',
        exercises: 7
      },
      {
        name: 'Estado de um componente',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course}  />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = (props) => {
  return(
    <div>
      <h1>{props.course.name}</h1>
    </div>
)}

const Content = (props) => {
  return(
    <div>
      <Part name={props.parts[0].name} exercise={props.parts[0].exercises} />
      <Part name={props.parts[1].name} exercise={props.parts[1].exercises} />
      <Part name={props.parts[2].name} exercise={props.parts[2].exercises} />
    </div>
)}

const Total = (props) => {
  return(
    <div>
      <p>Number of exercises {props.parts[0].exercises}
      </p>
    </div>
)}

const Part = (props) => {
  return(
    <div>
      <p>
        {props.name} {props.exercise}
      </p>
    </div>
)}

export default App
```