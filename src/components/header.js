import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Inicio</Link> | 
        <Link to="/mision-vision">Misión y Visión</Link> | 
        <Link to="/catalogo">Catálogo</Link> | 
        <Link to="/contacto">Contacto</Link>
      </nav>
    </header>
  );
}

export default Header;
