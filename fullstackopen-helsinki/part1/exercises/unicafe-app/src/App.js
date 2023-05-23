import { useState } from "react";

const App = () => {
  let feedback = false
  const firstRandomNum = Math.floor(Math.random() * 7)
  const anecdotes = [
    'Se fazer algo dói, faça isso com mais frequência.',
    'Contratar mão de obra para um projeto de software que já está atrasado, faz com que se atrase mais ainda!',
    'Os primeiros 90% do código correspondem aos primeiros 10% do tempo de desenvolvimento... Os outros 10% do código correspondem aos outros 90% do tempo de desenvolvimento.',
    'Qualquer tolo escreve código que um computador consegue entender. Bons programadores escrevem código que humanos conseguem entender.',
    'Otimização prematura é a raiz de todo o mal.',
    'Antes de mais nada, depurar é duas vezes mais difícil do que escrever o código. Portanto, se você escrever o código da forma mais inteligente possível, você, por definição, não é inteligente o suficiente para depurá-lo.',
    'Programar sem o uso extremamente intenso do console.log é o mesmo que um médico se recusar a usar raio-x ou testes sanguíneos ao diagnosticar pacientes.',
    'A única maneira de ir rápido é ir bem.'
  ]
  let arr = new Uint8Array(anecdotes.length -1) // Way to create array of any size and automatcly fill all index with 0's

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [randNum, setRandNum] = useState(firstRandomNum)
  const [votes, setVotes] = useState(arr)
  const [winnerAnecdote, setWinnerAnecdote] = useState(0)

  if (total > 0){
    feedback = true
  }
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

  const RandNum = () => {
    const max = 7
    const num = Math.floor(Math.random() * max)
    setRandNum(num)
  }

  const VoteAnecdote = () => {
    const copia = [ ...votes]
    copia[randNum] += 1
    setVotes(copia)
    const indexOfMax = copia.indexOf(Math.max(...copia))
    setWinnerAnecdote(indexOfMax)
  }
  
  if (feedback){
    return(
      <div>
        <h1> Give feedback </h1>
        <Button text='good' handleClick={VoteGood}/>
        <Button text='neutral' handleClick={VoteNeutral}/>
        <Button text='bad' handleClick={VoteBad}/>
        <br></br>
        <h2>UNICAFE Statistics</h2>
        <Statistics name='good' total={good}/>
        <Statistics name='neutral' total={neutral}/>
        <Statistics name='bad' total={bad}/>
        <p>-----------</p>
        <Statistics name='Total' total={total}/>
        <Statistics name='Average' total={average/total}/>
        <Statistics name='Positive' total={good/total} />
        <br></br>
        <Anecdotes index={randNum + 1} anedotas={anecdotes[randNum]} voteQuantity={votes[randNum]}/>
        <Button text='Anedotas' handleClick={RandNum}/>
        <Button text='Vote' handleClick={VoteAnecdote}/>
        <br></br>
        <WinnerAnecdote anedota={anecdotes[winnerAnecdote]} voteQuantity={votes[randNum]}/>
      </div>    
    )
  }
  else {
    return(
      <div>
        <h1> Give feedback </h1>
        <Button text='good' handleClick={VoteGood}/>
        <Button text='neutral' handleClick={VoteNeutral}/>
        <Button text='bad' handleClick={VoteBad}/>
        <br></br>
        <h2>UNICAFE Statistics</h2>
        <p>No feedback given</p>
        <br></br>
        <Anecdotes index={randNum + 1} anedotas={anecdotes[randNum]} voteQuantity={votes[randNum]}/>
        <Button text='Anedotas' handleClick={RandNum}/>
        <Button text='Vote' handleClick={VoteAnecdote}/>
        <br></br>
        <WinnerAnecdote anedota={anecdotes[winnerAnecdote]} voteQuantity={votes[randNum]}/>
      </div>
    )
  }
}

const Button = ( {text, handleClick} ) => {
  return(
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  )
}

const Anecdotes = ( {index, anedotas, voteQuantity} ) => {
  return (
    <div>
      <h2>Anedotas</h2>
      <p>Anedota nº {index} </p>
      <p>{anedotas}</p>
      <p>has {voteQuantity} votes</p>
    </div>
  )
}

const WinnerAnecdote = ( {anedota, voteQuantity} ) => {
  return (
    <div>
      <h2>Anedota com mais votos</h2>
      <p>{anedota}</p>
      <p>Votes: {voteQuantity}</p>
    </div>
  )
}

const Statistics = ( {name, total} ) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            {name}
          </td>
          <td>
            {total}
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default App;
