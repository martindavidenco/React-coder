import CartWidget from "../CartWidget/CartWidget"
import logo from "../../assets/free-logo.png"
import "./NavBar.css"
import { NavLink } from "react-router-dom"

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
                <li>
                    <NavLink to="/" className={({isActive})=>isActive? "active" : "inactive"}>
                        INICIO pa
                    </NavLink>
                </li>
                <li> <NavLink to="/" className={({isActive})=>isActive? "active" : "inactive"}>
                        EXPLORAR
                    </NavLink></li>
                <li> <NavLink to="/" className={({isActive})=>isActive? "active" : "inactive"}>
                        CAMPERAS
                    </NavLink></li>
                <li> <NavLink to="/" className={({isActive})=>isActive? "active" : "inactive"}>
                        PANTALONES
                    </NavLink></li>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar