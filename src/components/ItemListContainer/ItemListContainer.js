import "./ItemListContainer.css"

const ItemListContainer = (props) => {
    return (
        <div className="mensaje">
        <p className="texto">{props.name}</p></div>
    )
}

export default ItemListContainer