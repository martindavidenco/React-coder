import "./CartWidget.css"
import logoCarro from "../../assets/carrito-de-compras.png"
import { Link } from "react-router-dom"
const CartWidget = () => {
    return (
        <>
        
        <Link to="/carrito"><img src={logoCarro} width="75" height="75" alt="Publica"/></Link>
        </>
    )
}

export default CartWidget