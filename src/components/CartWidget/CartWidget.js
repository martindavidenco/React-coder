import "./CartWidget.css"
import logoCarro from "../../assets/carrito-de-compras.png"
import { Link } from "react-router-dom"
const CartWidget = () => {
    return (
        <>
        <img src={logoCarro} width="75" height="75" alt="Publica"/>
        <Link to={"/detail"}>Carrito</Link>
        </>
    )
}

export default CartWidget