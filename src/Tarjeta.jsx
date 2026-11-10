function Tarjeta({usuario}) {
    return (
    <li>
        <h3>{usuario.firstName}</h3>
        <p>Email: {usuario.email}</p>
        <img src={usuario.image} alt={`Avatar de ${usuario.firstName}`} />
    </li>
  )
}

export default Tarjeta