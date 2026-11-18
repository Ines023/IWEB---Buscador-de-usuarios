import logo from '../public/logo.svg'

function Header() {
  return (
    <div id="cabecera"> 
      <img className="logo" src={logo} alt="Logo de usuarios" />
      <h3 className="mensaje">Bienvenido a la web de Inés García Ruiz</h3>
    </div>
  )
}

export default Header
