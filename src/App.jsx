import { useState } from 'react'
import './App.css'

import {mock1} from './constants/users.js'

import Header from './Header.jsx'
import Resultados from './Resultados.jsx'

import CONFIG from './config/config.js'

function App() {
  const [query, setQuery] = useState('')
  const [resultado, setResultado] = useState([])

  const callServer = async () => {
    if (CONFIG.use_server) {
      const response = await fetch(`${CONFIG.server_url}`)
      const data = await response.json()
      setResultado(data.users)
    } else {
      setResultado(mock1.users)
    }
    
  }

  return (
    <div className="App">
      <Header />
      <div>
        <h2 id="buscador">Buscador de usuarios</h2>
        <input id="query" type="text" placeholder="Texto a buscar" value={query} onChange={(e) => setQuery(e.target.value)}></input>
        <button id="botonsearch" onClick={() => callServer()}>Buscar</button>
        <button>Ver todos</button>
      </div>
      {resultado && <Resultados resultado={resultado} />}
    </div>
  )
}

export default App
