import { useState } from 'react'
import './App.css'

import Header from './Header.jsx'

function App() {
  const [query, setQuery] = useState('')
  const [resultado, setResultado] = useState([])

  const callServer = () => {
    console.log('Buscando usuarios con query: ' + query)
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

    </div>
  )
}

export default App
