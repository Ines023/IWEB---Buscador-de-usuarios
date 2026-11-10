import { useState } from 'react'
import './App.css'

import {mock1} from './constants/users.js'


import Header from './Header.jsx'
import Resultados from './Resultados.jsx'

function App() {
  const [query, setQuery] = useState('')
  const [resultado, setResultado] = useState([])

  const callServer = () => {
    const users = mock1.users
    setResultado(users.filter(user => user.firstName.toLowerCase().includes(query.toLowerCase())))
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
