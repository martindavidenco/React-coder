import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const productoImg = require.context("../../assets/productos", true)
export const ItemDetail = ({productoSeleccionado}) => {
  console.log(productoSeleccionado)
  return (
    <div>
      <h1>DETALLE DEL PRODUCTO</h1>
      <p> {productoSeleccionado.nombre} </p>
      <p>PRECIO= ${productoSeleccionado.importe}</p>
      <p>TALLES DISPONIBLES: {productoSeleccionado.talle}</p>
      <Card.Img variant="top" src={productoImg(`./${productoSeleccionado.img}`)} />
      <Button  variant="primary">AÑADIR AL CARRITO</Button>
    </div>
  )
}
export default ItemDetail