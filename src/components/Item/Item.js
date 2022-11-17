import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Item.css"
import { Link } from 'react-router-dom';
const Item = ({product}) => {
  return (
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`/src/assets/productos/${product.img}`}   />
      <Card.Body>
        <Card.Title>{product.nombre}</Card.Title>
        <Card.Text>
         ${product.importe} {product.talle}
        </Card.Text>
        <Link to={`item/${product.id}`}><Button variant="primary">Ver detalle</Button></Link>
        
      </Card.Body>
    </Card>
      

  )
}
export default Item 