import Item from "../Item/Item"
import "./Itemlist.css"
const ItemList = ({ products }) => {
    return (
        <div className="productos">
            {products.map((product) => (
                <Item key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ItemList