import "./ItemListContainer.css"
import { data } from "../../data/data"
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList";
import { getData } from "../../data/data";
import { useParams } from "react-router-dom";
import loading from "../../assets/loading.gif"

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const { categoryName } = useParams()
    console.log(categoryName)
    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (categoryName) {
                const filteredData = data.filter((producto) => {
                    return producto.category === categoryName
                });
                resolve(filteredData)
            } else { resolve(data) }
        },2000)
    })
    useEffect(() => {
        getProducts
            .then((res) => setItems(res))
            .catch(error => console.log(error))
    }, [categoryName])
    useEffect(() => {
        getData().then((products) => {
            setItems(products)
        })
    }, [])



    return (
        <div className="main">
            {items.lenght == 0 ? <img src={loading} /> :
                <ItemList products={items} />}
        </div>
    )
};

export default ItemListContainer