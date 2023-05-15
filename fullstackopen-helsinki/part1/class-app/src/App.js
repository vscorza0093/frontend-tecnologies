import React from "react"
import { useState } from "react"

const App = () => {
  const [cliques, setCliques] = useState({
    esquerda:0,
    centro: 0,
    direita: 0
  })

  const handleCliqueEsquerda = () => 
    setCliques({ ...cliques, esquerda: cliques.esquerda + 1 })
  
  const handleCliqueCentro = () => 
    setCliques({ ...cliques, direita: cliques.direita + 1})

  const handleCliqueDireita = () => 
    setCliques({ ...cliques, centro: cliques.centro + 1})

    return(
    <div>
      {cliques.esquerda}
      <button onClick={handleCliqueEsquerda}>Esquerda</button>
      <br></br>
      {cliques.centro}
      <button onClick={handleCliqueCentro}>Centro</button>
      <br></br>
      {cliques.direita}
      <button onClick={handleCliqueDireita}>Direita</button>
    </div>
  )
}

export default App