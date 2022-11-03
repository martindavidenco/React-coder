import CartWidget from "../CartWidget/CartWidget"
import logo from "../../assets/free-logo.png"
import "./NavBar.css"
const NavBar = () => {
    return (
        <div className="navBar">
            <div>
                <img src={logo} width="100px"
                    height="80px" alt="Logo" />
                <div>
                    <h1 className="titulo">FLAME Mercado de ropa</h1>

                </div>
            </div>
            <ul className="listaNav">
                <li><a className="itemsLista" href="index.html">Inicio</a></li>
                <li><a className="itemsLista" href="pages/explorar.html">Explorar</a></li>
                <li><a className="itemsLista" href="pages/publicar.html">Publicar</a></li>
                <li><a className="itemsLista" href="pages/registro.html">Registrarme</a></li>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar