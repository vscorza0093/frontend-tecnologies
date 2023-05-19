import React from "react"
import { useState } from "react"

const App = () => {
  const [valor, setValor] = useState(0)
  
  // Uma const do tipo função que retorna uma const do tipo função que está dentro da própria função
  const ola = (quem) => console.log('Hello ', quem)

  const maisUm = (novoValor) => setValor(novoValor)

  return (
    <div>
      {valor}
      <Botao handleClick={() => ola("0101001010")} texto="ola" />
      <Botao handleClick={() => ola("Vinicius")} texto="ola" />
      <Botao handleClick={() => maisUm(valor + 1)} texto="Mais um" />
    </div>
  )
}

const Botao = ( {handleClick, texto} ) => (
  <button onClick={handleClick}>
    {texto}
  </button>
)

export default App