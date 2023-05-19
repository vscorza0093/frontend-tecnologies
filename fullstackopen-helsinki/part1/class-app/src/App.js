import React from "react"
import { useState } from "react"

const App = () => {
  const [valor, setValor] = useState(10)

  return (
    <div>
      {valor}
      <button>Zerar</button>
    </div>
  )
}

export default App