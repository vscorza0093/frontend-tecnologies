## Resolution 1.3

```js
const App = () => {
  const course = 'Desenvolvimento de aplicação Half Stack'
  
  const part1 = {
    name:'Fundamentos da biblioteca React',
    exercises: 10
  }
  const part2 = { 
    name: 'Usando props para passar dados',
    exercises: 7
  }
  const part3 = {
    name: 'Estado de um componente',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}  />
      <Content part1={part1.name} exercises1={part1.exercises} part2={part2.name} exercises2={part2.exercises} part3={part3.name} exercises3={part3.exercises} />
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
    </div>
  )
}
```