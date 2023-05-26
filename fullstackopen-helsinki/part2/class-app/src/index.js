import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const Notes = [
  {
    id: 1,
    content: 'HTML é fácil',
    important: true
  },
  {
    id: 2,
    content: 'O navegador só pode executar JavaScript',
    important: false
  },
  {
    id: 3,
    content: 'GET e POST são os métodos mais importantes do protocolo HTTP',
    important: true
  },
  {
    id: 4,
    content: 'Arrow function é uma novidade do ECMAScript6',
    important: true
  },
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <App component={Notes} />
)