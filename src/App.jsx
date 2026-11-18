import { useState } from 'react'
import './App.css'

import {mock1} from './constants/users.js'

import Header from './Header.jsx'
import Formulario from './Formulario.jsx'
import Resultados from './Resultados.jsx'

import CONFIG from './config/config.js'

function App() {
  const [query, setQuery] = useState('')
  const [resultado, setResultado] = useState([])
  const [error, setError] = useState(null)

  const callServer = async (param) => {
    setError(null)

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
        setError(error)
        console.error('Error fetching data:', error)
      }
    } else {
      setResultado(mock1.users)
    }
    
  }

  return (
    <div className="App">
      <Header />
      <Formulario contenido={query} setContenido={setQuery} callServer={callServer} />
      {error && <div className="error">Error: {error.message}</div>}
      {resultado && <Resultados resultado={resultado} />}
    </div>
  )
}

export default App
