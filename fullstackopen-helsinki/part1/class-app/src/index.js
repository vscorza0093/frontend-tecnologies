import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

let contador = 1

const recarregar = () => {
    ReactDOM.createRoot(document.getElementById('root')).render(
        <App contador={contador} />
    )
}
setInterval(() => {
    recarregar()
    contador += 1
}, 1000);