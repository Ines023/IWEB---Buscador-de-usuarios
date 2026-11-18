function Formulario({ contenido, setContenido, callServer }) {
return (
    <>
        <h2 id="buscador">Buscador de usuarios</h2>
        <input id="query" type="text" placeholder="Texto a buscar" value={contenido} onChange={(e) => setContenido(e.target.value)}></input>
        <button id="botonsearch" onClick={() => callServer()}>Buscar</button>
        <button id="botonall" onClick={() => callServer("all")}>Ver todos</button>
    </>
  )
}

export default Formulario