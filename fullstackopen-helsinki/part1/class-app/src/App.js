import { useState } from 'react'
import axios from 'axios'

const App = () => {
  let [ contador, setContador ] = useState(0)

  const sumOne = () => {
    console.log("somou 1, resultado: ", contador)
    setContador(contador + 1)
  }
  const reduceOne = () => setContador(contador - 1)
  const resetCounter = () => setContador(0)
  const sumTwo = () => setContador(contador + 2)
  const alertMsg = () => alert("ALERTAAAA!!!")
  const powerOfTwo = () => setContador(contador * contador)
  console.log(contador)
  if (contador == 0){
    console.log("limpei o console", console.clear())
  }
  if (contador == 'Infinity'){
    console.log("infinitamente louco")
  }

  return (
    <div>
      <ul>
        {
          axios({
            method: 'get',
            url: 'https://dog.ceo/api/breeds/image/random',
            responseType: 'stream'
          }).then(function (response){
            response.data.pipe(fs.createWriteStream('abc'))
          })
        }
      </ul>
      <Show contador={contador} />
      <Button 
        onClick={sumOne} 
        text="sum one" 
      />
      <Button
        onClick={reduceOne}
        text="minus one"
      />
      <Button
        onClick={resetCounter}
        text="reset"
      />
      <Button
        onClick={sumTwo}
        text="sum two"
      />
      <Button
        onClick={alertMsg}
        text="alert message"
      />
      <Button
        onClick={powerOfTwo}
        text="power of two"
      />
    </div>
  )
}

const Show = ({ contador }) => <div>{contador}</div>

const Button = ({ onClick, text }) => <button onClick={onClick}> {text} </button>

export default App