import CartWidget from "../CartWidget/CartWidget"
import logo from "../../assets/free-logo.png"
import "./NavBar.css"
import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="navBar">
            <div>
                <a href="/"><img src={logo} width="100px"
                    height="80px" alt="Logo" /></a>
                <div className="titulo">
                    <h1>FLAME </h1>


                </div>
            </div>
            <ul className="listaNav">
                <li className="inicioButton">
                    <NavLink to="/" className={({ isActive }) => isActive ? "active" : "inactive"}>
                        INICIO
                    </NavLink>
                </li>
                <li> <NavLink to="/category/superior" className={({ isActive }) => isActive ? "active" : "inactive"}>
                    Parte superior
                </NavLink></li>
                <li> <NavLink to="/category/inferior" className={({ isActive }) => isActive ? "active" : "inactive"}>
                    Parte inferior
                </NavLink></li>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar