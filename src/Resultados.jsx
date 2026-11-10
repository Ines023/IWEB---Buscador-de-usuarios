import Tarjeta from './Tarjeta'

function Resultados({resultado}) {
  return (
    <ul id="resultados">
      {resultado.map((usuario) => (
        <Tarjeta key={usuario.id} usuario={usuario} />
      ))}
    </ul>
  )
}

export default Resultados
