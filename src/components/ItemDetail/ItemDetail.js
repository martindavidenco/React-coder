import Card from 'react-bootstrap/Card';
import "./Itemdetail.css";
import whatsapp from "../../assets/whatsapp.png";
import Button from 'react-bootstrap/Button';
import { useState, useContext } from 'react';
import { cartContext } from '../../context/CartProvider';
import { Link } from 'react-router-dom';

const productoImg = require.context("../../assets/productos", true)

export const ItemDetail = ({ productoSeleccionado }) => {
  const { addCart } = useContext(cartContext);
  const [count, setCount] = useState(1)
  return (
    <div className="mainProducto">
      <div className="tituloYInfo">
        <h2>{productoSeleccionado.title}</h2>
        <button className="megusta" type="button">&hearts; Like</button>
        <div className="fotoinfo">
          <Card.Img className='fotoProd' variant="top" src={productoImg(`./${productoSeleccionado.imageId}`)} />
         
          <div className="tablaInfo">
            <div>
            {productoSeleccionado.description}

            </div>
        
            <div>
              <div>Estado del producto:</div>
              <p>{productoSeleccionado.Estado}</p>
            </div>
            <div>
              <div>Talle/s:</div>
              <p>{productoSeleccionado.talle}</p>
            </div>
            <div>
              <div>stock:</div>
              <p>{productoSeleccionado.stock}</p>
            </div>
            <div>
              <div>Precio:</div>
              <p>{productoSeleccionado.price}</p>
            </div>
          </div>

        </div>
        <div className='itemCount'>
          <Button onClick={() => setCount(count + 1)}>+</Button>
          <Button onClick={() => setCount(count > 1 ? count - 1 : count - 0)}>-</Button>
          <Button onClick={() => addCart(productoSeleccionado, count)} variant="primary">AÑADIR {count} {productoSeleccionado.title.toUpperCase()} AL CARRITO</Button>
        </div>
        <Link className='compra' to="/carrito"><Button>VER CARRITO</Button></Link>
        <div className="whatsapp">
          <a target="_blank"
          href={`https://api.whatsapp.com/send/?phone=543513752299&text=Hola+quiero+el+${productoSeleccionado.title}+que+estas+vendiendo&app_absent=0`}><img
            width="50" height="50" src={whatsapp} /></a>
          <h3>Contacta con el anunciante!</h3>
        </div>
      </div>
    </div>
  )
}
export default ItemDetail

