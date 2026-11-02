import {Link} from "react-router-dom"

function Nav(){
    return(
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Login</Link></li>
                    <li><Link to="/registro">Registrarse</Link></li>
                    <li><Link to="/dash">Dashboard</Link></li>
                    <li><Link to="/productos">Productos</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </nav>
        </div>
    )
}
export default Nav