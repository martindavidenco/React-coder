import { Link } from "react-router-dom"
import { cartContext } from '../../context/CartProvider';
import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import "./Counter.css"
const Counter = ({ product,  modal, settModal }) => {
    const { addCart } = useContext(cartContext);
    const [count, setCount] = useState(1)
   
    const toggleModal = () => {
        settModal(!modal)
    }
    return (

        <div className='itemCount1'>
            <div className="sumaResta" >
                <Button onClick={() => setCount(count + 1)}>+</Button>
                <Button onClick={() => setCount(count > 1 ? count - 1 : count - 0)}>-</Button>
            </div >
            <div onClick={toggleModal}>
                <Button variant="primary" onClick={() =>  addCart(product, count)}>AÑADIR {count} {product.title}  AL CARRITO </Button>

            </div>
            <div>
                <Link className='compra' to="/carrito"><Button>VER CARRITO</Button></Link>
            </div>

        </div>

    )
}

export default Counter