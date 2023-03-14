import "./CartWidget.css"
import logoCarro from "../../assets/carrito-de-compras.png"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { cartContext } from '../../context/CartProvider';


const CartWidget = () => {
    const { cart } = useContext(cartContext);
    return (
        <>
        
        <Link className="cartLength" to="/carrito"> {cart.length}<img src={logoCarro} width="75" height="75" alt="Publica"/></Link>
      
        </>
    )
}

export default CartWidget