

export const ItemDetail = ({productoSeleccionado}) => {
  console.log(productoSeleccionado)
  return (
    <div>

      <p> {productoSeleccionado.nombre} </p>
    </div>
  )
}
export default ItemDetail