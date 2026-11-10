import { useState } from 'react'
import './App.css'

import {mock1} from './constants/users.js'

import Header from './Header.jsx'
import Resultados from './Resultados.jsx'

import CONFIG from './config/config.js'

function App() {
  const [query, setQuery] = useState('')
  const [resultado, setResultado] = useState([])

  const callServer = async (param) => {
    if (CONFIG.use_server) {
      try {
        let queryparams;
        if (param === "all") {
          queryparams = "?limit=" + CONFIG.num_items
        } else {
          queryparams = "/search?q=" + query
        }
        const response = await fetch(`${CONFIG.server_url}${queryparams}`)
        const data = await response.json()
        setResultado(data.users)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
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
        <button id="botonall" onClick={() => callServer("all")}>Ver todos</button>
      </div>
      {resultado && <Resultados resultado={resultado} />}
    </div>
  )
}

export default App
