
import AddCart from "../AddCart/AddCart";
import "./Item.css"
import { Link } from 'react-router-dom';
const productoImg = require.context("../../assets/productos", true)
const Item = ({ product }) => {
  return (

    <div style={{ width: '18rem', height: "10%" }} className='productoNombre'>
      <Link to={`/item/${product.id}`}><img className="item" variant="top" src={productoImg(`./${product.imageId}`)} /></Link>
      <h3  >{product.title}</h3>
      <div className='addContainer'>
        <p>Estado: {product.Estado}</p>
        <p className='importe'>
          ${product.price}
        </p>
      </div>
      <AddCart product={product} className="addCart" />
    </div>
  )
}
export default Item 