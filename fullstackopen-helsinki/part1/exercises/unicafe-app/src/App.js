import { useState } from "react";

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)

  const VoteGood = () => {
    const updateGood = good + 1
    setGood(updateGood)
    setTotal(updateGood + neutral + bad)
    setAverage(average + 1)
  }
  
  const VoteNeutral = () => {
    const updateNeutral = neutral + 1
    setNeutral(updateNeutral)
    setTotal(good + updateNeutral + bad)
  }

  const VoteBad = () => {
    const updateBad = bad + 1
    setBad(updateBad)
    setTotal(good + neutral + updateBad)
    setAverage(average - 1)
  }
  return(
    <div>
      <h1> Give feedback </h1>
      <Botao text='good' handleClick={VoteGood}/>
      <Botao text='neutral' handleClick={VoteNeutral}/>
      <Botao text='bad' handleClick={VoteBad}/>
      <br></br>
      <h2>Statistics</h2>
      <Statistics name='good' count={good}/>
      <Statistics name='neutral' count={neutral}/>
      <Statistics name='bad' count={bad}/>
      <Statistics name='Total' count={total}/>
      <Average name='Average' average={average} total={total}/>
      <Statistics name='Positive' count={good/total} />
    </div>    
  )
}

const Botao = ( {text, handleClick} ) => {
  return(
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  )
}

const Statistics = ( {name, count} ) => {
  return (
    <div>
      <p>{name} {count}</p>
    </div>
  )
}

const Average = ( {name, average, total} ) => {
  return (
    <div>
      <p>{name} {average/total}</p>
    </div>
  )
}



export default App;
