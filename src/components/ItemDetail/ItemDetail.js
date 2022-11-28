import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Itemdetail.css"
import whatsapp from "../../assets/whatsapp.png"
const productoImg = require.context("../../assets/productos", true)
export const ItemDetail = ({ productoSeleccionado }) => {
  console.log(productoSeleccionado)
  return (
    <div class="mainProducto">
      <div class="tituloYInfo">
        <h2>{productoSeleccionado.nombre}</h2>
        <button class="megusta" type="button">&hearts; Like</button>
        <div class="fotoinfo">  <Card.Img className='fotoProd' variant="top" src={productoImg(`./${productoSeleccionado.img}`)} />
          <div class="tablaInfo keyframe">
            <table>
              <tr>
                <td>ESTADO DEL PRODUCTO:</td>
                <td>{productoSeleccionado.tipo}</td>
              </tr>
              <tr>
                <td>Talle/s:</td>
                <td>{productoSeleccionado.talle}</td>
              </tr>
              <tr>
                <td>Colores:</td>
                <td>Unico color</td>
              </tr>
              <tr>
                <td>Precio:</td>
                <td>$2000</td>
              </tr>
            </table>
          </div>
          <Button variant="primary">AÑADIR AL CARRITO</Button>
        </div>
        <div class="whatsapp"><a target="_blank"
          href="https://api.whatsapp.com/send/?phone=543513752299&text=Hola+quiero+lo+que+estas+vendiendo&app_absent=0"><img
            width="50" height="50" src={whatsapp} /></a>
          <h3>Contacta con el anunciante!</h3>
        </div>
      </div>
    </div>
  )
}
export default ItemDetail

